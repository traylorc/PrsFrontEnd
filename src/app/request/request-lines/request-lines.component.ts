import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  
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

  delete(): void {
    this.requestsvc.remove(this.id).subscribe(
      res =>{console.debug("Success", res);
    this.router.navigateByUrl("/request/list");
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
