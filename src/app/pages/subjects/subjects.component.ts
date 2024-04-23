import { Component } from '@angular/core';
import { subjects } from '../../../mock-db/subjects';
import { TableHeader } from 'src/interfaces/tableheader';
import { TableRow } from 'src/interfaces/tablerow';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  subjects = [...subjects];

  headerData: TableHeader[] = [
    { name: 'Name' },
    { name: 'Description'}
  ];

  rowData: TableRow[] = [];

  constructor() {
    this.rowData = this.subjects.map((subject) => ({
      values: [subject.name, subject.description]
    }));
  }
}
