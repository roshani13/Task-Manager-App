// import { Component, ChangeDetectionStrategy} from '@angular/core';
// import { NavController,ModalController ,AlertController} from '@ionic/angular';
// import { NgCalendarModule  } from 'ionic2-calendar';
// import * as moment from 'moment';
// import { eventNames } from 'cluster';
// import { TIMEOUT } from 'dns';
// import { timeout } from 'q';
// @Component({
//   selector: 'app-assigntask',
//   templateUrl: './assigntask.page.html',
//   styleUrls: ['./assigntask.page.scss'],
// })
// export class AssigntaskPage {
//   eventSource = [];
//   Title: string;
//   selectedDay = new Date();

//   calendar = {
//     mode:'month',
//     currentDate: this.selectedDay

//   }
//   constructor(public navCtrl:NavController, private modalCtrl:ModalController,private alertCtrl:AlertController){

//   }

//   async addEvent(){
//     let modal = await this.modalCtrl.create({component:'EventModalPage', 
//     componentProps:{selectedDay: this.selectedDay}
//     });
//     modal.present();

//     // modal.onDidDismiss(data =>{
//     //   if(data){
//     //     let eventData = data;

//     //     eventData.startTime = new Date(data.startTime);
//     //     eventData.endTime = new Date(data.endTime);

//     //     let events = this.eventSource;
//     //     events.push(eventData);
//     //     this.eventSource = [];
//     //     setTimeout(() => {
//     //       this.eventSource = events;
//     //     })
//     //   }
//     // })

//   }
//   onViewTitleChanged(title:string){
//     this.Title = title;

//   }
//   onTimeSelected(ev: any){
//     this.selectedDay = ev.selectedTime;

//   }

//  async onEventSelected(event: any){
//     let start = moment(event.startTime).format('LLLL');
//     let end = moment(event.endTime).format('LLLL');

//     let alert = await this.alertCtrl.create({
//       header:'' +event.header,
//       subHeader:'From: ' + start +'<br>To: ' +end,
//       buttons:['OK']
//     });
//    alert.present();

//   }
// }
