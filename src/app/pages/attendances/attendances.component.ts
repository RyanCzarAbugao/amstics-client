import { Component } from '@angular/core';
import { TableHeader } from 'src/interfaces/tableheader';
import { AttendanceApiService } from 'src/app/services/attendanceApiService/attendance-api.service';
import { IAttendance } from 'src/interfaces/iattendance';

@Component({
  selector: 'app-attendances',
  templateUrl: './attendances.component.html',
  styleUrls: ['./attendances.component.css']
})
export class AttendancesComponent {
  status : string = "Present";
  presentStatusClass : string = "bg-green-800 text-white";
  lateStatusClass : string = "bg-yellow-500 text-white";  
  attendances !: IAttendance[];

  headerData: TableHeader[] = [
    { name: 'Date' },
    { name: 'Time' },
    { name: 'Status' },
    { name: 'Student' }
  ];

  constructor(private attendanceApiService: AttendanceApiService) {
    this.attendanceApiService.getAttendances().subscribe((response)=> {
      console.log(response);
      this.attendances = response.map((attendance) => ({
        enroll_no: attendance.enroll_no,
        time_in_date: new Date(attendance.class_date).toLocaleDateString("en-US"),
        time_in_time: new Date(attendance.class_date).toLocaleTimeString(),
        status: attendance.status
      }));
    });
  }
}