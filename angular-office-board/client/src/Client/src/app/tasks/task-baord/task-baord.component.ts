import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task, User } from '../../shared/interfaces';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-baord',
  templateUrl: './task-baord.component.html',
  styleUrls: ['./task-baord.component.scss'],
})
export class TaskBaordComponent implements OnInit {
  toDoTasks: Array<Task>;
  doingTasks: Array<Task>;
  doneTasks: Array<Task>;
  currentUser!: User;

  constructor(private taskService: TaskService, private router: Router) {
    this.toDoTasks = new Array<Task>();
    this.doingTasks = new Array<Task>();
    this.doneTasks = new Array<Task>();
  }

  ngOnInit(): void {
    this.fetchTasks();

  }

  fetchTasks() {
    this.taskService.getAllTasks().subscribe((res) => {
      this.toDoTasks = res.filter((x) => x.status == 1);
      this.doingTasks = res.filter((x) => x.status == 2);
      this.doneTasks = res.filter((x) => x.status == 3);
    });
  };

  
  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(res => {
      this.fetchTasks();
    });
  }

  confirmDelete(name: string, id: number) {
    if (confirm(`${name} - Delete task?`)) {
      this.deleteTask(id);
    }
  }


}
