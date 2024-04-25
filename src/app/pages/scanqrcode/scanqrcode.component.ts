import { Component, ViewChild } from '@angular/core';
import { ScannerQRCodeResult, NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { AttendanceApiService } from 'src/app/services/attendanceApiService/attendance-api.service';
import { RoutineApiService } from 'src/app/services/routineApiService/routine-api.service';
import { IRoutine } from 'src/interfaces/iroutine';

@Component({
  selector: 'app-scanqrcode',
  templateUrl: './scanqrcode.component.html',
  styleUrls: ['./scanqrcode.component.css']
})
export class ScanqrcodeComponent {
  scannedCode: string | null = null;
  alert: boolean = true;
  routines !: IRoutine[];
  alertMessage: string = "";

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  constructor(
    private attendanceApiService: AttendanceApiService,
    private routineApiService: RoutineApiService,
  ) { }

  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    this.scannedCode = e[0].value;
    this.onTimeIn(this.scannedCode);
    action.stop();
  }

  public onTimeIn(code: string | null) {
    if (code === null) {
      this.setAlertMessage('Code is null');
      return;
    }

    this.getRoutines(parseInt(code));
    const dateTimeNow = new Date(); // Get the current date and time

    console.log("Current Time:", dateTimeNow);

    const matchedRoutine = this.routines.find(routine => {
      // Convert start_time and end_time strings to Date objects
      const startTime = new Date(routine.start_time);
      const endTime = new Date(routine.end_time);
    
      console.log("Routine Start Time:", startTime);
      console.log("Routine End Time:", endTime);
    
      // Check if the current time is between the start_time and end_time of the routine
      return dateTimeNow > startTime && dateTimeNow < endTime;
    });
    
    console.log("Matched Routine:", matchedRoutine);
    const startTime = new Date(matchedRoutine?.start_time!);
    const difference = dateTimeNow.getTime() - startTime.getTime()!;
    const minutesFromStartTime = new Date(difference).getMinutes();
    
    if (minutesFromStartTime > 15) {
      alert('You are late!');
      this.setAttendance(code, 'Late');
      return;
    }
    
    this.setAttendance(code, 'Present');

    setTimeout(() => {
      this.alert = true;
    }, 2000);
  }

  getRoutines(enroll_no: number) {
    this.routineApiService.getRoutineByEnrollNo(enroll_no).subscribe((response) => {
      this.routines = response.map((routine: IRoutine) => ({
        enroll_no: routine.enroll_no,
        day: routine.day,
        start_time: routine.start_time,
        end_time: routine.end_time,
        subject: routine.subject,
        location: routine.location
      }));
    });
  }

  setAttendance(code : string, status: string){
    this.attendanceApiService.addAttendance({
      enroll_no: code,
      class_date: Date.now(),
      status: status
    }).subscribe((response) => { console.log(response) });

    this.setAlertMessage('Your attendance is recorded!');
  }

  private setAlertMessage(message: string) {
    this.alert = false;
    this.alertMessage = message;
  }
}
