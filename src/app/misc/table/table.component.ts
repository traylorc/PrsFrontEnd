import { Component, Input, OnInit } from '@angular/core';
export interface Column {
  display: string;
  sort: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  sortColumn: string = "id";
  sortAsc: boolean = true;
  @Input()
  columns!: Column[]; 
  
  constructor() { }

  ngOnInit(): void {
  }

  sortFn(column: string): void{
    if(column ===this.sortColumn){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }

}
