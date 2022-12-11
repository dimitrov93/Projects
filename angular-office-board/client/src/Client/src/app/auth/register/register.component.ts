import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import {IUsers} from '../../shared/interfaces'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  form = this.fb.group({
    'username': ['', [Validators.required]],
    'email': ['', [Validators.required]],
    'password': ['', [Validators.required]]
  })

  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  registerHandler() {
   if (this.form.invalid) {
    return;
   }
   const data = this.form.value;
   this.authService.register(data)
    .subscribe(user => {
      this.router.navigate(['/auth/login'])
    })
   
  }


}
