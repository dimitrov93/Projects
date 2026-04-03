import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Message } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  private msgPath = environment.apiUrl + 'messages';
    
  constructor(private http: HttpClient) { }

  getAllMsg(): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(this.msgPath);
  }

  create(data: any, userId: any, userName: any): Observable<any> {
    return this.http.post(this.msgPath, {data, userId, userName});
  }

  deleteMsg(id: number) {
    return this.http.delete(this.msgPath + `/${id}`);
  }

  editMsg(id: any, data: any) {
    return this.http.put(this.msgPath + `/${id}/edit`, data);
  }

  getById(id: number): Observable<Message> {
    return this.http.get<Message>(this.msgPath + `/${id}`);
  }

//   createComment(id: number, data: any): Observable<any> {
//     return this.http.post<Task>(this.tasksPath + `/comments/${id}`, {id: id, data: data});
//   }

//   changeStatus(id: any, status: any) {
//     return this.http.put(this.tasksPath + `/${id}`, status);
//   }



}
