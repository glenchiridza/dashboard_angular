import { Component, OnInit, Input, Output } from '@angular/core';
import {Stand} from './stand/stand';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import { StandDialogComponent, StandDialogResult } from './stand-dialog/stand-dialog.component';
import {StandService} from './stand/stand.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Harare stands';

  registered = false
  login = false
  logState = "Login"
  regState = "Register"

  clickedL(){
  this.login = !this.login
  if(this.login){
  this.logState = "Log Out"
  }
  else{
    this.logState ="Log In"
    this.login = false
  }
  
  }

  clickedR(){
    this.registered = !this.registered
    if(this.registered){
      this.regState = " "
      this.logState = "Log Out"
      }
      else{
        this.regState ="Register"
        this.registered = false
      }
    }
}