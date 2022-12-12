import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageNotFoundComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
