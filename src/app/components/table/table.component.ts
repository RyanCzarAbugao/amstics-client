import { Component, Input } from '@angular/core';
import { TableHeader } from '../../../interfaces/tableheader';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  @Input() headers : TableHeader[] = [];
  @Input() tableClass !: string;
}
