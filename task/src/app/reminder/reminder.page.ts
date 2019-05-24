import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})
export class ReminderPage {

  data = { title:'', description:'', date:'', time:'' };


  constructor(public navCtrl: NavController,
    public localNotifications: LocalNotifications,
    public platform: Platform,
    public alertCtrl: AlertController) { }

    async submit() {
      console.log(this.data);
      var date = new Date(this.data.date+" "+this.data.time);
      console.log(date);
      this.localNotifications.schedule({
         text: 'Delayed ILocalNotification',
         trigger: {at:new Date(new Date())},
         led: 'FF0000',
         sound: this.setSound(),
      });
      let alert = await this.alertCtrl.create({
        message: 'Congratulation...!',
        subHeader:'Notification setup successfully at '+date,
        buttons: ['OK']
      });
      alert.present();
      this.data = { title:'', description:'', date:'', time:'' };
    }
    setSound() {
      if (this.platform.is('android')) {
        return 'file://assets/sounds/Rooster.mp3'
      } else {
        return 'file://assets/sounds/Rooster.caf'
      }
    }

}
