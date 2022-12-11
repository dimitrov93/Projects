import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsers } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerPath = environment.apiUrl + 'auth/register';
  private loginPath = environment.apiUrl + 'auth/login';
  private logoutPath = environment.apiUrl + 'auth/logout';

  private user$$ = new BehaviorSubject<undefined | null | IUsers>(undefined);
  user$ = this.user$$.asObservable().pipe(
    filter((val): val is IUsers | null => val !== undefined)
  );

  user: IUsers | null = null;


  constructor(private http: HttpClient) { }


  register(data: any): Observable<any> {
    return this.http.post<IUsers>(this.registerPath,data)
      .pipe(tap(user => this.user$$.next(user)))
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.loginPath, data)
    .pipe(tap(user => this.user$$.next(user)));;

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
  
  getAllUsers(): Observable<IUsers[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';

    return this.http.get<IUsers[]>(url)
  }
}
