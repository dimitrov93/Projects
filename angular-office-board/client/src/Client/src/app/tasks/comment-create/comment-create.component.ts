import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Comment, User } from 'src/app/shared/interfaces';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss'],
})
export class CommentCreateComponent implements OnInit {
  params!: number;
  currentUser!: User;
  comment!: Comment;
  user = localStorage.getItem('token');
  userId = JSON.parse(this.user as any).id;
  userName = JSON.parse(this.user as any).user;
  msgForm!: FormGroup;
  currentDate = new Date();


  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,

  ) {
    this.authService.getCurrentUser().subscribe((res) => {
      this.currentUser = res;
      this.params = this.route.snapshot.params['id'];
    });

    this.msgForm = this.fb.group({
      'content': ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  createComments() {    
    
    this.taskService
      .createComment(this.params, { userName: this.userName, content: this.msgForm.value.content, date: this.currentDate, userId: this.userId })
      .subscribe((res) => {
        this.router.navigate([`/tasks/${this.params}`]);
      });
  }
}
