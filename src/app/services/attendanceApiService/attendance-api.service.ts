import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceApiService {
  apiUrl = `${environment.host}/api/attendances`;

  constructor(private http: HttpClient) { }

  getAttendances(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  addAttendance(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, post);
  }
}