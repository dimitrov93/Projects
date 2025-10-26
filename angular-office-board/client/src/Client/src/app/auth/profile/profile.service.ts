import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  Profile  } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private currentUserPath = (userId: any) => environment.apiUrl + `users/` + userId;


  constructor(private http: HttpClient) { }


  getCurrentUser(userId: any): Observable<Profile> {
    return this.http.get<Profile>(this.currentUserPath(userId));
  }

  editProfile(userId: any, data: any) {
    return this.http.put(this.currentUserPath(userId), data);
  }


}
