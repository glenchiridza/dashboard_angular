import {Component} from '@angular/core'

@Component({
    selector:'card-details',
    template:`
    <div class="text-center" style="color:#757575;">
    <mat-form-field style="margin-left: 20px;">
    <mat-label>Card Number</mat-label>
    <input type="number" matInput />
</mat-form-field>

<mat-form-field style="margin-left: 20px;">
    <mat-label>Expiration Date</mat-label>
    <input type="date" matInput />
</mat-form-field>


<mat-form-field style="margin-left: 20px;">
    <mat-label>CVC/CVV</mat-label>
    <input type="string" matInput />
</mat-form-field>

<mat-form-field style="margin-left: 20px;">
    <mat-label>Name</mat-label>
    <input [(ngModel)]="name" type="text" matInput />
</mat-form-field>

<mat-form-field>
    <mat-label>Amt $</mat-label>
    <input type="money" matInput>
</mat-form-field>
</div>
    `
})
export class CardDetailsComponent{

    name:string
}