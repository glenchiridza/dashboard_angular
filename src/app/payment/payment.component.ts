import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ToastrService } from '../common/toastr.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  agreeCheck:boolean =false;
  payButton:boolean = true;
  incardDetails = false;
  cardnum = false
  on =true
  btnNext = "Next";

  @Output() name = new EventEmitter

//image slides
slides =[{'image':'/assets/land.png'},{'image':'/assets/card.png'},{'image':'/assets/card2.png'},{'image':'/assets/card3.png'}]

 
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {

  }

  check(){
      this.agreeCheck = !this.agreeCheck

  }
  next(){

    if (this.agreeCheck) {
      this.on = false
      this.cardnum =true
      this.payButton = false
      this.btnNext = "Back"
      this.incardDetails = true

      
    
    }
  
    else{
    this.toastr.error("you need to agree to continue")
    }


  }
  back(){
    

    this.on = true
    this.cardnum =false
    this.payButton = true
    this.btnNext = "Next"
    this.incardDetails = false
    this.agreeCheck = false
  
  }


  payResoonse() {

    this.toastr.success("Payment Successful")
  }

}
