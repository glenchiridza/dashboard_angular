import {Component, Injectable} from '@angular/core'

Injectable()
export class DashService{


    dash: boolean = true;
    prof: boolean;
    notif: boolean;
    pay: boolean;
    sup: boolean;
    log: boolean;
 
    
    dashboard(){
        this.dash = true

        this.prof = false
        this.notif = false
        this.pay = false
        this.sup = false
        this.log = false

    }
    profile(){

        this.prof = true


        this.dash = false
        this.notif = false
        this.pay = false
        this.sup = false
        this.log = false
    }

    notify(){
        this.notif = true


        this.dash = false
        this.prof = false
        this.pay = false
        this.sup = false
        this.log = false
    }
    payment(){
        this.pay = true



        this.dash = false
        this.notif = false
        this.prof = false
        this.sup = false
        this.log = false
    }

    support(){
        this.sup = true

        this.dash = false
        this.notif = false
        this.prof = false
        this.pay = false
        this.log = false
    }
    logout(){

        this.log = true

        this.dash = false
        this.notif = false
        this.prof = false
        this.pay = false
        this.sup = false
    }

}