import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {

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

  request: Request = new Request();
  id: number = 0;

  constructor(private syssvc: SystemService, private requestsvc: RequestService, private router: Router, private route: ActivatedRoute) { }

  refresh(): void{
    this.id = this.route.snapshot.params.id;
    this.requestsvc.getByPk(this.id).subscribe(
      res => {console.debug("Success", res);
    this.request = res;
  },
  err =>{console.error(err);}
    )
  }

  rejected(): void {
    this.requestsvc.rejected(this.request).subscribe(
      res =>{console.debug("Success", res);
      this.refresh();
  },
  err =>{console.error(err);}
    )
  }
  
  approve(): void {
    this.requestsvc.approved(this.request).subscribe(
      res =>{console.debug("Success", res);
      this.refresh();
  },
  err =>{console.error(err);}
    )
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.requestsvc.getByPk(this.id).subscribe(
      res => {console.debug("Success", res);
    this.request = res;
  },
  err =>{console.error(err);}
    )
  }

}
