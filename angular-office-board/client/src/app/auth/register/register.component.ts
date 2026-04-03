import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { appEmailDomains } from 'src/app/shared/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.minLength(10), appEmailValidator(appEmailDomains)]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  registerHandler() {
    if (this.form.invalid) {
      return;
    }
    const data = this.form.value;
    this.authService.register(data).subscribe((user) => {
      this.router.navigate(['/auth/login']);
    });
  }

  get email() {
    return this.form.get('email')
  }
}
