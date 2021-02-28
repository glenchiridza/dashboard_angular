import { Component, OnInit, Input,Output } from '@angular/core';
import {EventEmitter} from '@angular/core'
import {Stand} from './stand';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stand',
  templateUrl: './stand.component.html',
  styleUrls: ['./stand.component.css']
})
export class StandComponent implements OnInit {

  @Input() stand: Stand;
  @Output() edit = new EventEmitter<Stand>();
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  payNow(){

    this.route.navigate(['/payment']);
  }
 

}

