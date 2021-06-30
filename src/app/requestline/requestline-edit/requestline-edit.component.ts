import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  rLine: Requestline = new Requestline();
  id: number = 0;

  constructor(private syssvc: SystemService, private rlsvc: RequestlineService, private router:Router, private route: ActivatedRoute) { }

  update(): void{
    this.rlsvc.edit(this.rLine).subscribe(
      res =>{console.debug("Success", res);
    this.router.navigateByUrl("/request/list");
  },
  err =>{console.error(err);}
    )
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.rlsvc.getByPk(this.id).subscribe(
      res =>{console.debug("Success", res);
    this.rLine = res;
  },
  err => {console.error(err);}
    )
  }

}
