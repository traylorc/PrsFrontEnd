import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request = new Request();
  id: number = 0;

  constructor(private syssvc: SystemService, private requestsvc: RequestService, private router: Router, private route: ActivatedRoute) { }

  update(): void{
    this.requestsvc.edit(this.request).subscribe(
      res =>{console.debug("Success", res);
    this.router.navigateByUrl("/request/list");
  },
  err =>{console.error(err);}
    )
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.requestsvc.getByPk(this.id).subscribe(
      res =>{console.debug("Success", res);
    this.request = res;
  },
  err => {console.error(err);}
    )
  }

}
