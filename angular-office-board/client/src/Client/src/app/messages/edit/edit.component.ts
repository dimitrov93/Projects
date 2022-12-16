import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, User } from 'src/app/shared/interfaces';
import { TaskService } from 'src/app/tasks/task.service';
import { MsgService } from '../messages.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  params!: number;
  currentUser!: User;
  msg!: Message 
  oldMsg!: Message | undefined
  


  constructor(
    private msgService: MsgService,
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.params = this.route.snapshot.params['id'];
    this.msgService.getById(this.params).subscribe(res => {
      this.oldMsg = res;
    })
    
    this.taskService.getTaskDetails(this.params).subscribe(res => {
      console.log(res);
      
    })
  }

  handleUpdate(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.msgService.editMsg(this.params, form?.value).subscribe(res => {
      this.router.navigate([`/messages`]);
    })

  }


  // editMsg() {
  //   this.msgService.editMsg(this.params, form.value).subscribe(res => {
  //     this.router.navigate([`/messages`]);
  //   })
  // }
}
