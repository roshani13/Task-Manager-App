import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'notes', loadChildren: './notes/notes.module#NotesPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'reminder', loadChildren: './reminder/reminder.module#ReminderPageModule' },
  // { path: 'assigntask', loadChildren: './assigntask/assigntask.module#AssigntaskPageModule' },
  { path: 'event-modal', loadChildren: './event-modal/event-modal.module#EventModalPageModule' },
  { path: 'add', loadChildren: './add/add.module#AddPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule, ReactiveFormsModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
