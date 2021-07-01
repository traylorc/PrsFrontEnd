import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-request',
  templateUrl: './review-request.component.html',
  styleUrls: ['./review-request.component.css']
})
export class ReviewRequestComponent implements OnInit {

  sortColumn: string = "id";
  sortAsc: boolean = true;
  
  sortFn(column: string): void {
    if(column === this.sortColumn){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }

  requests: Request[] = [];

  constructor(private syssvc: SystemService, private reqsvc: RequestService, private router: Router) { }

  review(): void {
      this.router.navigateByUrl("/review/item");
  }

  ngOnInit(): void {
    
    let userId = this.syssvc.loggedInUser==null? 0 : this.syssvc.loggedInUser.id;

    this.reqsvc.getreviewsnotmine(userId).subscribe(
      res=>{console.debug("success", res);
    this.requests = res;}
    )
    
  }

}
