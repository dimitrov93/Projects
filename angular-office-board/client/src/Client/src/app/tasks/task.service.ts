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

  create(data: any): Observable<any> {
    return this.http.post(this.tasksPath, data);
  }

  deleteTask(id: number) {
    return this.http.delete(this.tasksPath + `/${id}`);
  }


}
