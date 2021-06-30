import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

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
