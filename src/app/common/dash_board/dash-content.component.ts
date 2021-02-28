import {Component, OnInit, Input} from '@angular/core'
import { DashService } from './dash.service';
import { Router } from '@angular/router';
@Component({

    selector:'dash-content',
    templateUrl:'./dash-content.component.html',
    styles:[`
        mat-card-title{font-weight:350;
             font-size:14px; cursor:pointer;
                        color:#a9afbb;}
        mat-icon{color:#a9afbb; vertical-align:middle;}
        mat-card-title >img {width: 60px;height: 60px;margin:20px;}
        div.active {background-color:orange; box-shadow:2px 2px 2px 2px #6c757d;}
        div.active mat-card-title {color:#ffffff;}
        div.active mat-card-title >mat-icon{color:#ffffff;}
        #user {margin-right: 15px;margin-left: 15px; min-width: 110px;max-width: 110px;font-weight: 700;}
        
    `]
    
})
export class DashContentComponent{

    imageSet?:boolean = true; //image provided
    user? = {imageUrl:"/assets/profile.png"}

    username:string = "Glen Chiridza"

    @Input() notifycount:number
    //handle clicks on dashboard
    dash:boolean=false
    prof:boolean
    notif:boolean
    pay:boolean
    sup:boolean
    log:boolean

    

    public dashservice:DashService

    constructor(dashservice:DashService,private router:Router){
        this.dashservice = dashservice
    }

    //replace with applied stands length and send to notification
    serviceApplied(){
        return this.notifycount
    }
 
    dashboard(){
        this.dashservice.dashboard()
    }
    profile(){
        this.dashservice.profile()
    }

    notify(){
        this.dashservice.notify()
    }
    payment(){
        this.dashservice.payment()
    }

    support(){
        this.dashservice.support()
    }
    logout(){
        this.router.navigate(['/payment'])
        // this.dashservice.logout()
    }


}