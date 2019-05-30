import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})
export class ReminderPage {

  data = { title: '', description: '', date: '', time: '' };

  constructor(public navCtrl: NavController,
    public localNotifications: LocalNotifications,
    public platform: Platform,
    private http: HttpClient,
    private storage: Storage,
    public alertCtrl: AlertController) { }

  async add_reminder() {
    this.data.date = this.data.date.split('T')[0]
    this.data.time = this.data.time.split('T')[1]

    console.log(this.data);

    this.storage.get("user").then((val) => {
      if (val == null)
          val = 'admin@xyz.com';
      this.data['user'] = val
      console.log(this.data['user'])

      this.http.post('http://127.0.0.1:8001/events/add_reminder'
        , this.data,
        {
          observe: 'response',
          responseType: 'text'
        }
      ).subscribe(res => {
        console.log("response", res)
        if (res.status == 201) {
          console.log("reminder added")
          this.navCtrl.navigateForward('/home');

        }
        else {
          console.log("Failure")
          // this.errorMessage = "Unable To Login"
        }
      }, error => {
        if (error.error == "")
          console.log("Unable to add reminder")
        // this.errorMessage = "Unable To Login"
        else
          console.log("err", error.error)
        // this.errorMessage = error.error
      })


    });
  }
}
