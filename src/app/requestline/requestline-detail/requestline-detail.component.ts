import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { ProductService } from 'src/app/product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-detail',
  templateUrl: './requestline-detail.component.html',
  styleUrls: ['./requestline-detail.component.css']
})
export class RequestlineDetailComponent implements OnInit {

  rLine: Requestline = new Requestline();
  id: number = 0;

  constructor(private syssvc: SystemService, private prdsvc: ProductService, private rlsvc: RequestlineService, private router: Router, private route: ActivatedRoute) { }

  delete(): void {
    this.rlsvc.remove(this.id).subscribe(
      res =>{console.debug("Success", res);
    this.router.navigateByUrl(`/request/lines/${this.rLine.requestId}`);
  },
  err =>{console.error(err);}
    )
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.rlsvc.getByPk(this.id).subscribe(
      res => {console.debug("Success", res);
    this.rLine = res;
  },
  err =>{console.error(err);}
    )
  }

}
