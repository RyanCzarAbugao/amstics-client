import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AttendancesComponent } from './pages/attendances/attendances.component';
import { ScanqrcodeComponent } from './pages/scanqrcode/scanqrcode.component';
import { StudentsComponent } from './pages/students/students.component';
import { RoutinesComponent } from './pages/routines/routines.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'attendances', component: AttendancesComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'routines', component: RoutinesComponent},
  { path: 'scan_qrcode', component: ScanqrcodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
