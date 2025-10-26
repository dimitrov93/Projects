import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/messages/messages.service';
import { Message, Profile, Task, User } from 'src/app/shared/interfaces';
import { TaskService } from 'src/app/tasks/task.service';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userId!: string | undefined;
  currentUser!: User | undefined;
  profile!: Profile | undefined;
  myTasks: Array<Task> = [];
  myMsgs: Array<Message> = [];
  constructor(
    private authService: ProfileService,
    private taskService: TaskService,
    private msgService: MsgService
  ) {

  }

  
  ngOnInit(): void {
    this.fetchUserData();
    this.taskService.getAllTasks().subscribe(res => {
      this.myTasks = res.filter((x) => x.userId == this.userId)
    })

    this.msgService.getAllMsg().subscribe(res => {
      this.myMsgs = res.filter((x) => x.userId == this.userId)
    })
  }

  fetchUserData() {
    let theUserId = localStorage.getItem('token');
    let userId = JSON.parse(theUserId as any).id
    this.userId = userId
    this.authService.getCurrentUser(userId).subscribe((res) => {
      this.profile = res;
    });
  }


  
}
