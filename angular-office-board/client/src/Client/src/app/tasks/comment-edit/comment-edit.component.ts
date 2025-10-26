import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TaskService } from 'src/app/tasks/task.service';
import { User, Task, Comment } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.scss'],
})
export class CommentEditComponent implements OnInit {
  params!: number;
  task!: Task | undefined;
  comments!: Array<Comment>;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      const commentId = params['commentId'];
      console.log(commentId);
      localStorage.setItem('task', id);

      this.taskService.getTaskDetails(id).subscribe((res) => {
        this.task = res
        this.comments = res.comments.filter(x => x._id == commentId)
      });
    });
  }

  cancel(id: string | undefined) {
    console.log('tuk');
    
    this.router.navigate([`tasks/${id}`]);
  }
}
