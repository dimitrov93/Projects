import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User, Task } from 'src/app/shared/interfaces';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  params!: number;
  currentUser!: User;
  task!: Task | undefined

  // form = this.fb.group({
  //   title: ['', [Validators.required]],
  //   description: ['', [Validators.required]],
  //   status: [''],
  // });

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,

  ) {
    this.authService.getCurrentUser().subscribe((res) => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.params = this.route.snapshot.params['id'];
    this.taskService.getTaskDetails(this.params).subscribe(res => {
      this.task = res
    })
  }

  handleUpdate(form: NgForm) {        
    if (form.invalid) {
      return
    }
    if (confirm("Save changes?")) {
      this.taskService.editTask(this.params, form.value).subscribe(res => {
        this.router.navigate([`/tasks`]);
      })
    }
    // this.msgService.editMsg(this.params, form?.value).subscribe(res => {
    //   this.router.navigate([`/messages`]);
    // })

  }
}
