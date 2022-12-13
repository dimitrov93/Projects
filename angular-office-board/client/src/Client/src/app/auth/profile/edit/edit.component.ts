import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

import { FormBuilder, FormGroup } from '@angular/forms';
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

  form = this.fb.group({
    username: [''],
    position: [''],
    department: [''],
  });

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void { this.fetchData()}

  fetchData() {
    let theUserId = localStorage.getItem('token');
    let userId = JSON.parse(theUserId as any).id
    this.profileService.getCurrentUser(userId).subscribe((res) => {
      this.profile = res;
    });
  }

  editProfile() {
    let theUserId = localStorage.getItem('token');
    let userId = JSON.parse(theUserId as any).id    
    this.profileService.editProfile(userId, this.form.value).subscribe(res => {
      this.router.navigate([`/auth/profile`]);
    });
  }

  confirmEdit() {
    if (confirm("Save changes?")) {
      this.editProfile();
    }
  }
}
