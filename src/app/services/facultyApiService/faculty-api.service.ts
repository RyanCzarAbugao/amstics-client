import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyApiService {

  host = 'https://amstics-server.onrender.com';
  apiUrl = `${this.host}/api/users`;

  constructor(private http: HttpClient) { }

  getFaculties(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getFacultyById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addFaculty(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, post);
  }

  updateFaculty(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, post);
  }

  deleteFaculty(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
