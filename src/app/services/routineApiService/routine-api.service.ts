import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoutineApiService {
  apiUrl = `${environment.host}/api/routines`;

  constructor(private http: HttpClient) { }

  getRoutines(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getRoutineByEnrollNo(id: number): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }

  addRoutine(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, post);
  }

  updateRoutine(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, post);
  }

  deleteRoutine(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
