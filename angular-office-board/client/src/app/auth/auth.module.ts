import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './profile/user/user.component';
import { EditComponent } from './profile/edit/edit.component';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    UserComponent, EditComponent
  ],
  imports: [
    CommonModule, 
    AuthRoutingModule, 
    FormsModule, 
    ReactiveFormsModule],
})
export class AuthModule {}
