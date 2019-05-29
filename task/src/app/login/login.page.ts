import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authentication.service';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }


  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
    ]
  };


  loginUser(value) {

    this.authService.loginUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.http.post('http://127.0.0.1:8001/events/login_user'
          , value,
          {
            observe: 'response',
            responseType: 'text'
          }
        ).subscribe(res => {
          console.log("response", res)
          if (res.status == 200) {
            console.log("Login")
            this.navCtrl.navigateForward('/home');
          }
          else {
            console.log("Failure")
            this.errorMessage = "Unable To Login"
          }
        }, error => {
          if (error.error == "")
            this.errorMessage = "Unable To Login"
          else
            this.errorMessage = error.error
        })

      }, err => {
        this.errorMessage = err.message;
      })
  }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }

}