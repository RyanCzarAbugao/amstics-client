import { Component, ViewChild } from '@angular/core';
import { ScannerQRCodeResult, NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { AttendanceApiService } from 'src/app/services/attendanceApiService/attendance-api.service';

@Component({
  selector: 'app-scanqrcode',
  templateUrl: './scanqrcode.component.html',
  styleUrls: ['./scanqrcode.component.css']
})
export class ScanqrcodeComponent {
  scannedCode: string | null = null;
  alert: boolean = true;
  alertMessage: string = "";

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  constructor(private attendanceApiService: AttendanceApiService) { }

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

    this.attendanceApiService.addAttendance({
      enroll_no: code,
      class_date: Date.now(),
      status: 'P'
    }).subscribe((response) => {console.log(response)});

    this.setAlertMessage('Your attendance is recorded!');

    setTimeout(() => {
      this.alert = true;
    }, 2000);
  }

  private setAlertMessage(message: string) {
    this.alert = false;
    this.alertMessage = message;
  }
}
