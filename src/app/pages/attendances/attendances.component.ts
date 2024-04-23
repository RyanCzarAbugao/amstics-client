import { Component } from '@angular/core';
import { TableHeader } from 'src/interfaces/tableheader';
import { TableRow } from 'src/interfaces/tablerow';
import { AttendanceApiService } from 'src/app/services/attendanceApiService/attendance-api.service';

@Component({
  selector: 'app-attendances',
  templateUrl: './attendances.component.html',
  styleUrls: ['./attendances.component.css']
})
export class AttendancesComponent {
  constructor(private attendanceApiService: AttendanceApiService) {
    this.attendanceApiService.getAttendances().subscribe((response)=> {
      console.log(response);
      this.rowData = response.map((attendance) => ({
        values: [
          new Date(attendance.class_date).toLocaleDateString("en-US"),
          new Date(attendance.class_date).toLocaleTimeString(),
          attendance.status,
          attendance.enroll_no
        ]
      }));
    });
  }

  headerData: TableHeader[] = [
    { name: 'Date' },
    { name: 'Time' },
    { name: 'Status' },
    { name: 'Student' },
    { name: 'Subject' }
  ];

  rowData: TableRow[] = [];
}