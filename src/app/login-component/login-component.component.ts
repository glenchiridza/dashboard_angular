import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  password:string
  email:string
  alertUser:string
  invalid = true
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){

    if(this.password ==="person" && this.email==="person@gmail.com"){
      this.invalid = false
    this.router.navigate(['/standsdash'])
    }
    else{
      this.invalid = true
      this.alertUser = "wrong password or username"
    }
  }
}
