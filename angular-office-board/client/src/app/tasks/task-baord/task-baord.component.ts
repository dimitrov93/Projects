import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task, User } from '../../shared/interfaces';
import { TaskService } from '../task.service';
import { AuthService } from 'src/app/auth/auth.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-task-baord',
  templateUrl: './task-baord.component.html',
  styleUrls: ['./task-baord.component.scss'],
})
export class TaskBaordComponent implements OnInit {
  toDoTasks: Array<Task> = [];
  doingTasks: Array<Task> = [];
  doneTasks: Array<Task> = [];
  currentUser!: User;

  constructor(private taskService: TaskService, private router: Router, private authService: AuthService) {
    // this.toDoTasks = new Array<Task>();
    // this.doingTasks = new Array<Task>();
    // this.doneTasks = new Array<Task>();

    this.authService.getCurrentUser().subscribe((res) => {
      this.currentUser = res;
    });
    
  }

  ngOnInit(): void {
    this.fetchTasks();    
  }

  fetchTasks() {
    this.taskService.getAllTasks().subscribe((res) => {
      
      if (res !== undefined) {
        return (

          this.toDoTasks = res.filter((x) => x.status == 1),
          this.doingTasks = res.filter((x) => x.status == 2),
          this.doneTasks = res.filter((x) => x.status == 3)
          )
        }
        return null

    });    
  };

  
  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(res => {      
      this.fetchTasks();
    });
  }

  confirmDelete(name: string, id: string | undefined) {
    if (confirm(`${name} - Delete task?`) && id) {
      this.deleteTask(id);
    }
  }

  changeStatus(id: string | undefined, status: number) {
    const data = {
      'status': status
    }
    this.taskService.changeStatus(id, data).subscribe(res => {      
      this.fetchTasks();
    });
  }

  drop(event: CdkDragDrop<Task[]>, status: number) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,event.previousIndex, event.currentIndex);
      let taskId: string | undefined = event.item.getRootElement().querySelector('#taskId')?.innerHTML
        this.changeStatus(taskId, status);
    } else {
      moveItemInArray(this.toDoTasks, event.previousIndex, event.currentIndex);
    }
  }

}
