import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'


import { DashboardComponent } from './dashboard/dashboard.component';
import { AppEmailDirective } from './shared/validators/app-email.directive';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth/auth.service';
import { TaskService } from './tasks/task.service';
import { ProfileService } from './auth/profile/profile.service';
import { AuthGuardService } from './shared/guards/auth.activate';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppEmailDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    NgbModule,
  ],
  providers: [
    DashboardComponent,
    AuthService,
    TaskService,
    ProfileService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
