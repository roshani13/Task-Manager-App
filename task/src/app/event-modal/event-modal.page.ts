import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular'
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.page.html',
  styleUrls: ['./event-modal.page.scss'],
})
export class EventModalPage  {
  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(),allDay:false }
  minDate = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ModalController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
   }

 save() {
   this.viewCtrl.dismiss(this.event);
  }

}
