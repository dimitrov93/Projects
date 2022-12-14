import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User, Task, Comment } from 'src/app/shared/interfaces';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id!: number;
  task!: Task | undefined;
  currentUser!: User;
  params!: number;
  show = 3;
  comments!: Array<Comment>;


  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    this.authService.getCurrentUser().subscribe((res) => {
      this.currentUser = res;
      this.params = this.route.snapshot.params['id'];
    });
    this.comments = new Array<Comment>();

  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.route.params.subscribe((params) => {
      
      const id = params['id'];
      localStorage.setItem('task', id);
      this.taskService.getTaskDetails(id).subscribe((res) => {
        console.log(res.comments);
        
        this.comments = res.comments
        this.task = res;
      });
    });
  }

  createComments() {
    this.taskService.createComment(this.params, {user: "Stefan", comments: 'Hello'}).subscribe(res => {      
    })
  }

  
  editTask(id: any) {
    this.router.navigate([`tasks/${id}/edit`]);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(res => {
      this.router.navigate(["/tasks"])
    });
  }

  confirmDelete(name: string | any, id: any) {
    if (confirm(`${name} - Delete this task?`)) {
      this.deleteTask(id);
    } else {
      return
    }
  }

  open() {
    this.router.navigate([`tasks/comments/${this.params}/edit`]);
  }
}
