import { Component } from '@angular/core';
import { StudentApiService } from 'src/app/services/studentApiService/student-api.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IStudent } from 'src/interfaces/istudent';
import { TableHeader } from 'src/interfaces/tableheader';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  showAddStudentModal: boolean = false;
  students: IStudent[] = [];
  studentAddForm: FormGroup = new FormGroup({
    enroll_no: new FormControl(),
    name: new FormControl(),
    grade_level: new FormControl(),
    section_name: new FormControl()
  });
  constructor(
    private studentApiService: StudentApiService,
    private formBuilder: FormBuilder
  ) {
    this.studentAddForm = this.formBuilder.group({
      enroll_no: [''],
      name: [''],
      grade_level: [''],
      section_name: [''],
      qr_code: [''],
    });
  }

  headerData: TableHeader[] = [
    { name: 'Enroll No' },
    { name: 'Name' },
    { name: 'Grade Level' },
    { name: 'Section Name' },
    { name: 'QR Code' },
  ];

  ngOnInit(){
    this.getStudents();
  }

  addStudent() {
    this.showAddStudentModal = !this.showAddStudentModal;
  }

  onSubmit(): void {
    this.studentAddForm.value.qr_code = this.studentAddForm.value.enroll_no;
    this.studentApiService.addStudent(this.studentAddForm.value).subscribe((response) => {
      alert('A new Student was successfully added!');
      this.getStudents();
    });
    console.warn('Your order has been submitted', this.studentAddForm.value);
    this.studentAddForm.reset();
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
}
