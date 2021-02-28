import {Component} from '@angular/core'
import { DashBoardComponent } from 'src/app/common/dash_board/dash-board.component';
import { DashContentComponent } from 'src/app/common/dash_board/dash-content.component';
import { DashService } from 'src/app/common/dash_board/dash.service';

@Component({

    selector:'side-content',
    templateUrl:'./side-content.component.html',
    styleUrls:['./side-content.component.css']
})
export class SideContentComponent{
  

    protected dashservice: DashService
    constructor(dashservice:DashService){
        this.dashservice = dashservice
    }
   
    

}