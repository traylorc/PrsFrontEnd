import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/misc/table/table.component';
import { User } from '../user-class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  sortColumn: string = "id";
  sortAsc: boolean = true;

  columns: Column[] = [
    {display:'Username', sort:'username'},
    {display:'Firstname', sort:'firstname'},
    {display:'Lastname', sort:'lastname'},
    {display:'Phone', sort:'phone'},
    {display:'Email', sort:'email'}

  ]

  sortFn(column: string): void{
    if(column ===this.sortColumn){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }

  searchCrit: string = "";

  users: User[] = [];

  constructor(private usersvc: UserService) { }

  ngOnInit(): void {

    this.usersvc.list().subscribe(
      res =>{console.debug("Success", res);
    this.users = res;
  },
  err =>{console.error(err);}
    )

  }

}
