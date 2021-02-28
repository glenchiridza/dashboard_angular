import {Component, OnInit} from '@angular/core'
import { StandService } from 'src/app/stand/stand.service'
import { Stand } from 'src/app/stand/stand'

@Component({

    selector:'dash-notify',
    templateUrl:'./notification.component.html',
    styles:[`
        #card-head {color:#fff;font-weight: 700;}
        button{padding:0px;font-size:12px;}
        a{color:#006400;}
    `]
    
})
export class NotificationComponent implements OnInit{

    stands:Stand[]
    applied:Stand[]
    notificationCount:number
    constructor(private standsService:StandService){}

    ngOnInit(){

        this.standsService.getStands()
        .subscribe(stands =>{
            this.stands = stands
            this.notificationCount = this.stands.length
        })
    }

     
}