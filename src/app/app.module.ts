import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {appRoutes} from './routers/routes';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { StandComponent } from './stand/stand.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { StandDialogComponent } from './stand-dialog/stand-dialog.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {StandService} from './stand/stand.service';
import { PaymentComponent } from './payment/payment.component';
import {Error404Component} from './error/404.component';
import { UploadComponent } from './nav/upload.component';
import { ToastrService } from './common/toastr.service';
import { CardDetailsComponent } from './payment/card-details.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatTableModule} from '@angular/material/table'
import { SideNavComponent } from './nav/side-nav.component';
import { DashBoardComponent } from './common/dash_board/dash-board.component';
import { SideContentComponent } from './nav/side-contents/side-content.component';
import { DashContentComponent } from './common/dash_board/dash-content.component';
import { ProfileComponent } from './dash-modules/profile/profile.component';
import { DashService } from './common/dash_board/dash.service';
import { NotificationComponent } from './dash-modules/notification/notification.component';
import { PayDashComponent } from './dash-modules/payments/pay-dash.component';
import { SupportComponent } from './dash-modules/support/support.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';


@NgModule({
  declarations: [
    AppComponent,
    StandComponent,
    StandDialogComponent,
    PaymentComponent,
    Error404Component,
    UploadComponent,
    CardDetailsComponent,
    SideNavComponent,
    DashBoardComponent,
    SideContentComponent,
    DashContentComponent,
    ProfileComponent,
    NotificationComponent,
    PayDashComponent,
    SupportComponent,
    RegistrationComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCarouselModule.forRoot(),
    MatProgressBarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [StandService,ToastrService,DashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
