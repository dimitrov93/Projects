import { Component, OnInit } from '@angular/core';
import { TaskService } from '../tasks/task.service';
import { MsgService } from '../messages/messages.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Task, Message, Comment } from '../shared/interfaces';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  todayTasks: Array<Task> = [];
  monthTasks: Array<Task> = [];
  yearTasks: Array<Task> = [];

  todayMsg: Array<Message> = [];
  monthMsg: Array<Message> = [];
  yearMsg: Array<Message> = [];

  todayComments: Array<Task> = [];
  monthComments: Array<Task> = [];
  yearComments: Array<Task> = [];

  constructor(
    private taskService: TaskService,
    private msgService: MsgService
  ) {}
  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getAllTasks().subscribe((res) => {
      let counter = 0;
      res.filter(x => {
        
        x.comments.filter(y => {
          new Date(y.date).getFullYear() + 1 ==
          new Date(Date.now()).getFullYear() + 1 &&
        new Date(y.date).getDate() == new Date(Date.now()).getDate()
        counter++
        }
        )
        
      })      
      
      this.todayTasks = res.filter(
        (x) =>
          new Date(x.createdAt).getFullYear() + 1 ==
            new Date(Date.now()).getFullYear() + 1 &&
          new Date(x.createdAt).getDate() == new Date(Date.now()).getDate()
      );
      this.monthTasks = res.filter(
        (x) =>
          new Date(x.createdAt).getFullYear() + 1 ==
            new Date(Date.now()).getFullYear() + 1 &&
          new Date(x.createdAt).getMonth() == new Date(Date.now()).getMonth()
      );
      this.yearTasks = res.filter(
        (x) =>
          new Date(x.createdAt).getFullYear() + 1 ==
          new Date(Date.now()).getFullYear() + 1
      );
    });

    this.msgService.getAllMsg().subscribe(res => {      
      this.todayMsg = res.filter(
        (x) =>
          new Date(x.createdAt).getFullYear() + 1 ==
            new Date(Date.now()).getFullYear() + 1 &&
          new Date(x.createdAt).getDate() == new Date(Date.now()).getDate()
      );
      this.monthMsg = res.filter(
        (x) =>
          new Date(x.createdAt).getFullYear() + 1 ==
            new Date(Date.now()).getFullYear() + 1 &&
          new Date(x.createdAt).getMonth() == new Date(Date.now()).getMonth()
      );
      this.yearMsg = res.filter(
        (x) =>
          new Date(x.createdAt).getFullYear() + 1 ==
          new Date(Date.now()).getFullYear() + 1
      );

    })
  }
}
