import { Component, OnInit } from '@angular/core';
import { Message, User } from 'src/app/shared/interfaces';
import { MsgService } from '../messages.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  user = localStorage.getItem('token');
  userId = JSON.parse(this.user as any).id;
  userName = JSON.parse(this.user as any).user;
  messages: Array<Message>;
  currentUser!: User;


  constructor(
    private msgService: MsgService,
    private authService: AuthService,
    private router: Router
  ) {
    this.messages = new Array<Message>();

    this.authService.getCurrentUser().subscribe((res) => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.fetchMessages();
    
  }

  fetchMessages() {
    this.msgService.getAllMsg().subscribe(res => {      
      this.messages = res;
    })
  }

  editMessage(id: number) {
    this.router.navigate([`messages/${id}/edit`]);
  }

  deleteMessage(id: number) {
    this.msgService.deleteMsg(id).subscribe(res => {
      this.fetchMessages();
    });
  }

  confirmDelete(name: string, id: number) {
    if (confirm(`${name} - Delete message?`)) {
      this.deleteMessage(id);
    }
  }
}
