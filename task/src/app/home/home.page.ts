import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Headers} from '@angular/http';
import { Body } from '@angular/http/src/body';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public notes = []
  public reminders = []

  userEmail: string;
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private storage: Storage,
    private http: HttpClient,
  ) {}
 
  ngOnInit(){
    let header = new Headers();

    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
      console.log(this.userEmail)
      this.storage.set("user", this.userEmail)
      let data = {user:this.userEmail}
      header.append("user","xyz");
      this.http.get('http://127.0.0.1:8001/events/get_dashboard_details'+ "?" + "user=" + this.userEmail
      ,
      {
        observe: 'body',
        responseType: 'json'
      }
    ).subscribe(res => {
      console.log("response", res)
      if (res){
        this.notes = res['notes']
        this.reminders = res['reminders']
      }
      // if (res.status == 201) {
      //   console.log("reminder added")
      // }
      // else {
      //   console.log("Failure")
      //   // this.errorMessage = "Unable To Login"
      // }
    }, error => {
      if (error.error == "")
        console.log("Unable to add reminder")
      // this.errorMessage = "Unable To Login"
      else
        console.log("err", error.error)
      // this.errorMessage = error.error
    })




    }else{
      this.navCtrl.navigateBack('');
    }
  }
 
  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }
}


