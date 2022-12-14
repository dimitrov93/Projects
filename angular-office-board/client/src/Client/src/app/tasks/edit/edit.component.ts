import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  task!: Task

  form = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    status: [''],
  });

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

  editTask() {
    console.log(this.form.value);
    
    this.taskService.editTask(this.params, this.form.value).subscribe(res => {
      console.log(res);
      this.router.navigate([`/tasks`]);
    })
  }

  confirmEdit() {
    if (confirm("Save changes?")) {
      this.editTask();
    }
  }

}
