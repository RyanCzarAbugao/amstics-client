import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceApiService {

  apiUrl = 'http://localhost:5000/api/attendances';

  constructor(private http: HttpClient) { }

  getAttendances(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getAttendanceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addAttendance(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, post);
  }

  updateAttendance(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, post);
  }

  deleteAttendance(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
