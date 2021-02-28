import {Component} from '@angular/core'

@Component({

    selector:'side-nav',
    templateUrl:'./side-nav.component.html',
    styles:[`
    my-container {width:400px;height:200px;margin:12px;border:1px solid #555;}
    mat-drawer-content {padding:12px;}
    mat-drawer-content >button{margin-left:1.3%;}
    
    `]
})
export class SideNavComponent{

    mode ={value:"rtext"}
}