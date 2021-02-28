import {Component, OnInit, Input } from '@angular/core';
import { Stand } from '../stand/stand';
import { StandDialogComponent, StandDialogResult } from '../stand-dialog/stand-dialog.component';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { StandService } from '../stand/stand.service';

@Component({
    selector:'app-upload',
    templateUrl:'./upload.component.html',
    styleUrls:['./upload.component.css'],
   
})

export class UploadComponent implements OnInit{
  

  visible:boolean = false
  loader:boolean = true;
  notificationCount:number
  tableCount:number

    stand:Stand;
    stands:Stand[];
    applied:Stand[] =[];
    @Input() processed:Stand[] =[];


    //bot chat
    toggleChat(){
      this.visible = !this.visible
    }

    //edit stand popup toggle
  
    editStand(list:'stands'|'applied'|'processed',stand:Stand):void{
  
      const dialogRef = this.dialog.open(StandDialogComponent,{
        width:'350px',
        data: {
          stand,
          enableDelete:true,
        }
      });
      dialogRef
        .afterClosed()
        // .subscribe((result:StandDialogResult) => this.stands.push(result.stand))
        .subscribe((result:StandDialogResult) => {
  
          const standList = this[list];
          const standIndex = standList.indexOf(stand);
          if(result.delete){
            standList.splice(standIndex, 1);
          }else {
            standList[standIndex] = stand;
          }
        });
    }
  
    drop(event:CdkDragDrop<Stand[]>): void {
      if(event.previousContainer === event.container){
        return;
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
  
      if(this.applied.length>=1){
        setTimeout(()=>{
       this.notificationCount= this.applied.length
       
        this.applied.forEach(stand =>{
          stand.isprocessed = true;
          this.processed.push(stand);
        });
        
        this.applied = [];
        
        },3000);
        
      }
      
  }
  
  
    constructor(private dialog: MatDialog, private standService: StandService){
  
    }
  
    newStand() {
      const dialogRef = this.dialog.open(StandDialogComponent, {
  
        width: '350px',
        data: {
          stand: {},
        }
      });
  
      dialogRef
        .afterClosed()
        .subscribe((result:StandDialogResult) => this.stands.push(result.stand));
    }

    tableNext(){
      // this.test = !this.test
    }
    tablePrev(){

    }
  
    ngOnInit() {


      this.loader = true;
    this.standService.getStands()
      .subscribe(stands =>{
        
        this.stands = stands;

    

      });

      setTimeout( ()=>{
        this.loader = false;
      },2200);

    
  
    }

    private sorted = false

    sort(item:string | any){

      let items:any = this.stands

      this.stands.sort((left: any, right:any) =>{
        if(left[item] < right[item]){
          return this.sorted ?1 :-1
        }
        if(left[item]> right[item]){
          return this.sorted ? -1 : 1;
        }

        return 0;
      })

      this.sorted = !this.sorted;
    }
    

  }
  