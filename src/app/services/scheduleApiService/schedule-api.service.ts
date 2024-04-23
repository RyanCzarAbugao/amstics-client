import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleApiService {

  host = 'https://amstics-server.onrender.com';
  apiUrl = `${this.host}/api/schedules`;

  constructor(private http: HttpClient) { }

  getSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getScheduleById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addSchedule(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, post);
  }

  updateSchedule(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, post);
  }

  deleteSchedule(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
