import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();

  constructor(private syssvc: SystemService, private requestsvc: RequestService, private router: Router) { }

  save(): void {
    this.requestsvc.create(this.request).subscribe(
      res =>{console.debug("Success", res);
    this.router.navigateByUrl("/request/list");
  },
  err =>{console.error(err);}
    )
  }

  ngOnInit(): void {
    this.request.userId = this.syssvc.loggedInUser == null ? -1: this.syssvc.loggedInUser.id;
  }

}
