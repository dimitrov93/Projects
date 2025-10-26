import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.fb.group({
    'email': ['', [Validators.required]],
    'password': ['', [Validators.required]]
  });
  
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }


  loginHandler() {
    if (this.form.invalid) {
      return
    }
    const data = this.form.value;
    
    this.authService.login(data)
      .subscribe(info => {   
        // {user: info.username, email: info.email, id: info._id}
    this.authService.saveToken(JSON.stringify({user: info.username, email: info.email, id: info._id}));
        this.router.navigate(['/'])
      })
  }

}
