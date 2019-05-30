import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    private storage: Storage) { }
  note = {}
  ngOnInit() { }


  add_note() {
    this.storage.get("user").then((val) => {
      if (val == null)
          val = 'admin@xyz.com';
      this.note['user'] = val
      console.log(this.note['user'])

      this.http.post('http://127.0.0.1:8001/events/add_note'
        , this.note,
        {
          observe: 'response',
          responseType: 'text'
        }
      ).subscribe(res => {
        console.log("response", res)
        if (res.status == 201) {
          console.log("note added")
          this.navCtrl.navigateForward('/home');

        }
        else {
          console.log("Failure")
          // this.errorMessage = "Unable To Login"
        }
      }, error => {
        if (error.error == "")
          console.log("Unable to add note")
        // this.errorMessage = "Unable To Login"
        else
          console.log("err", error.error)
        // this.errorMessage = error.error
      })


    });
  }
}
