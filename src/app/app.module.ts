import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AttendancesComponent } from './pages/attendances/attendances.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { QrcodesComponent } from './pages/qrcodes/qrcodes.component';
import { TableComponent } from './components/table/table.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ScanqrcodeComponent } from './pages/scanqrcode/scanqrcode.component';
import { StudentsComponent } from './pages/students/students.component';

import { AlertComponent } from './components/alert/alert.component';
import { ModalComponent } from './components/modal/modal.component';

import { QRCodeModule } from 'angularx-qrcode';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { HttpClientModule } from '@angular/common/http';

// Necessary to solve the problem of losing internet connection
LOAD_WASM().subscribe();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    SidebarComponent,
    SubjectsComponent,
    SchedulesComponent,
    QrcodesComponent,
    TableComponent,
    SettingsComponent,
    AttendancesComponent,
    ScanqrcodeComponent,
    StudentsComponent,
    AlertComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    NgxScannerQrcodeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
