import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage  {
  todos: string[] = [];
  todo: string;


  constructor(public navCtrl: NavController) {
 
  }
 
  add() {
    this.todos.push(this.todo);
    this.todo = "";
}

delete(item) {
    var index = this.todos.indexOf(item, 0);
    if (index > -1) {
        this.todos.splice(index, 1);
    }
}
}
