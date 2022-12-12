import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {

  constructor(private authService: AuthService, private router: Router) { }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/auth/login"]);
  }

  confirmLogout() {
    if (confirm("Logout?")) {
      this.logout();
    }
  }

}
