import { Component } from '@angular/core';
import { StudentApiService } from 'src/app/services/studentApiService/student-api.service';
import { TableHeader } from 'src/interfaces/tableheader';
import { TableRow } from 'src/interfaces/tablerow';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  showAddStudentModal : boolean = false;

  constructor(private studentApiService: StudentApiService) {
    this.studentApiService.getStudents().subscribe((response) => {
      console.log(response);
      this.rowData = response.map((student) => ({
        values: [
          student.enroll_no,
          student.name,
          student.grade_level,
          student.section_name,
          student.qr_code
        ]
      }));
    });
  }

  headerData: TableHeader[] = [
    { name: 'Enroll No' },
    { name: 'Name' },
    { name: 'Grade Level' },
    { name: 'Section Name' }
  ];

  rowData: TableRow[] = [];

  addStudent(){
    this.showAddStudentModal = !this.showAddStudentModal;
  }

  saveStudent(){
    console.log('saved');
  }
}
