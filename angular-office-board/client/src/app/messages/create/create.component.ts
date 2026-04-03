import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MsgService } from '../messages.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  user = localStorage.getItem('token');
  userId = JSON.parse(this.user as any).id;
  userName = JSON.parse(this.user as any).user;
  msgForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private msgService: MsgService,
    private router: Router
  ) {
    this.msgForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  create() {
    
    this.msgService
      .create(this.msgForm.value, this.userId, this.userName)
      .subscribe((res) => {
        console.log(res);
        
        this.router.navigate(['/messages']);
      });
  }
}
