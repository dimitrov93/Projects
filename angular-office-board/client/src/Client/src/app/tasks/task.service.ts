import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Task } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksPath = environment.apiUrl + 'tasks';
    
  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.tasksPath);
  }

  create(data: any, userId: any, userName: any): Observable<any> {
    return this.http.post(this.tasksPath, {data, userId, userName});
  }

  deleteTask(id: number) {
    return this.http.delete(this.tasksPath + `/${id}`);
  }

  getTaskDetails(id: number): Observable<Task> {
    return this.http.get<Task>(this.tasksPath + `/${id}`);
  }

  createComment(id: number, data: any): Observable<any> {
    return this.http.post<Task>(this.tasksPath + `/comments/${id}`, {id: id, data: data});
  }

  changeStatus(id: any, status: any) {
    return this.http.put(this.tasksPath + `/${id}`, {'status ': status});
  }

}
