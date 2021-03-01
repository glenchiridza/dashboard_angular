import {Routes} from '@angular/router';
import { StandComponent } from '../stand/stand.component';
import { PaymentComponent } from '../payment/payment.component';
import { Error404Component } from '../error/404.component';
import { UploadComponent } from '../nav/upload.component';
import { SideNavComponent } from '../nav/side-nav.component';
import { LoginComponentComponent } from '../login-component/login-component.component';
import { RegistrationComponentComponent } from '../registration-component/registration-component.component';

export const appRoutes:Routes = [

    {path: 'payment',component: PaymentComponent},
    {path: 'standsdash',component: SideNavComponent},
    {path: 'error',component:Error404Component},
    {path: '', redirectTo:'/login',pathMatch:'full'},
    { path: 'register', component: RegistrationComponentComponent},
      { path: 'login', component: LoginComponentComponent },

];

