import { Component, OnInit } from '@angular/core';
import { Profile, User } from 'src/app/shared/interfaces';
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

  constructor(
    private authService: ProfileService
  ) {

  }

  
  ngOnInit(): void {
    this.fetchUserData();

  }

  fetchUserData() {
    let theUserId = localStorage.getItem('token');
    this.authService.getCurrentUser(theUserId).subscribe((res) => {
      this.profile = res;
      console.log(this.profile);
    });
  }


  
}
