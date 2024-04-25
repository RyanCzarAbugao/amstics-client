import { Component } from '@angular/core';
import { StudentApiService } from 'src/app/services/studentApiService/student-api.service';
import { RoutineApiService } from 'src/app/services/routineApiService/routine-api.service';
import { IRoutine } from 'src/interfaces/iroutine';
import { IStudent } from 'src/interfaces/istudent';
import { TableHeader } from 'src/interfaces/tableheader';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrl: './routines.component.css'
})
export class RoutinesComponent {
  showAddRoutineModal: boolean = false;
  showRoutineListModal: boolean = false;
  routines !: IRoutine[];
  students !: IStudent[];
  enrollNumber !: number;
  routineAddForm: FormGroup = new FormGroup({
    enroll_no: new FormControl(),
    day: new FormControl(),
    start_time: new FormControl(),
    end_time: new FormControl(),
    subject: new FormControl(),
    location: new FormControl(),
  });

  routineTableHeaderData: TableHeader[] = [
    { name: 'Day' },
    { name: 'Start Time' },
    { name: 'End Time' },
    { name: 'Subject' },
    { name: 'Location' }
  ];

  studentTableHeaderData: TableHeader[] = [
    { name: 'Action' },
    { name: 'Enroll No' },
    { name: 'Name' },
    { name: 'Grade Level' },
    { name: 'Section Name' }
  ];

  constructor(
    private studentApiService: StudentApiService,
    private routineApiService: RoutineApiService,
    private formBuilder: FormBuilder
  ) { 
    this.routineAddForm = this.formBuilder.group({
      enroll_no: [''],
      day: [''],
      start_time: [''],
      end_time: [''],
      subject: [''],
      location: [''],
    });
  }

  ngOnInit(){
    this.getStudents();
  }

  addRoutine(enroll_no : number) {
    this.showAddRoutineModal = !this.showAddRoutineModal;
    this.enrollNumber = enroll_no;
    
    console.log(this.enrollNumber);
  }

  showRoutine(enroll_no : number) {
    this.showRoutineListModal = !this.showRoutineListModal;
    this.getRoutines(enroll_no);
  }

  getStudents(){
    this.studentApiService.getStudents().subscribe((response) => {
      this.students = response.map((student) => ({
        enroll_no: student.enroll_no,
        name: student.name,
        grade_level: student.grade_level,
        section_name: student.section_name,
        qr_code: student.qr_code
      }));
    });
  }

  getRoutines(enroll_no : number){
    this.routineApiService.getRoutineByEnrollNo(enroll_no).subscribe((response) => {
      this.routines = response.map((routine : IRoutine) => ({
        enroll_no: routine.enroll_no,
        day: new Date(routine.day).toDateString(),
        start_time: new Date(routine.start_time).toLocaleTimeString(),
        end_time: new Date(routine.end_time).toLocaleTimeString(),
        subject: routine.subject,
        location: routine.location
      }));
    });
  }

  onSubmit(): void {
    this.routineAddForm.value.enroll_no = this.enrollNumber;
    const day = new Date(this.routineAddForm.value.day);
    this.routineAddForm.value.day = day;
    const dateString = day.toISOString().slice(0, 10);
    this.routineAddForm.value.start_time = new Date(`${dateString}T${this.routineAddForm.value.start_time}:00`);
    this.routineAddForm.value.end_time = new Date(`${dateString}T${this.routineAddForm.value.end_time}:00`);
    console.log(this.routineAddForm.value);
    this.routineApiService.addRoutine(this.routineAddForm.value).subscribe((response) => {
      console.log(response);
      alert(`A new Routine was successfully added to student ${this.enrollNumber}.`);
      this.getRoutines(this.routineAddForm.value.enroll_no);
    });
    console.warn('routine has been submitted', this.routineAddForm.value);
    this.enrollNumber = 0;
    this.routineAddForm.reset();
  }
  
  onChangeDate(){
    
  }
}
