import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'


import { DashboardComponent } from './dashboard/dashboard.component';
import { AppEmailDirective } from './shared/validators/app-email.directive';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
  providers: [DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
