import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  profile!: Profile | undefined;
  form = this.fb.group({
    username: [''],
    position: [''],
    department: [''],
  });

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void { this.fetchData()}

  fetchData() {
    let theUserId = localStorage.getItem('token');
    this.profileService.getCurrentUser(theUserId).subscribe((res) => {
      this.profile = res;
    });
  }

  editProfile() {
    let theUserId = localStorage.getItem('token');    
    this.profileService.editProfile(theUserId, this.form.value).subscribe(res => {
      this.router.navigate([`/auth/profile`]);
    });
  }

  confirmEdit() {
    if (confirm("Save changes?")) {
      this.editProfile();
    }
  }
}
