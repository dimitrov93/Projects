import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile, User } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  profile!: Profile | undefined;
  currentUser!: User | undefined;

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    let theUserId = localStorage.getItem('token');
    let userId = JSON.parse(theUserId as any).id;
    this.profileService.getCurrentUser(userId).subscribe((res) => {
      this.profile = res;
    });
  }

  editProfile(form: NgForm) {
    if (confirm('Save changes?')) {
      let theUserId = localStorage.getItem('token');
      let userId = JSON.parse(theUserId as any).id;
      this.profileService.editProfile(userId, form?.value).subscribe((res) => {
        this.router.navigate([`/auth/profile`]);
      });
    }
  }

}
