import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsers, Profile, User } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerPath = environment.apiUrl + 'auth/register';
  private loginPath = environment.apiUrl + 'auth/login';
  private currentUser = (userId: any) => environment.apiUrl + 'users/' + userId;

  constructor(private http: HttpClient) { }


  register(data: any): Observable<any> {
    return this.http.post<IUsers>(this.registerPath,data)
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.loginPath, data)
  }

  saveToken(token: any) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  
  isAuthenticated() {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  
  logout() {
    if (this.isAuthenticated()) {
      localStorage.removeItem('token');
    }
  }
  
  getCurrentUser(): Observable<User> {
    let user = localStorage.getItem('token')
    let userId = JSON.parse(user as any).id
    return this.http.get<User>(this.currentUser(userId))
  }
}
