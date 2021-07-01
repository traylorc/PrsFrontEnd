import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  rLine: Requestline = new Requestline();
  id: number = 0;

  constructor(private syssvc: SystemService, private prdsvc: ProductService, private rlsvc: RequestlineService, private router: Router, private route: ActivatedRoute) { }

  products: Product[] = [];

  save(): void {
    this.rLine.productId =+ this.rLine.productId;
    console.log(this.rLine);
    this.rlsvc.create(this.rLine).subscribe(
      res =>{console.debug("Success", res);
    this.router.navigateByUrl(`/request/lines/${this.rLine.requestId}`);
  },
  err =>{console.error(err);}
    )
  }

  ngOnInit(): void {
    this.rLine.requestId = +this.route.snapshot.params.rid;
    this.prdsvc.list().subscribe(
      res => {console.debug("success"); this.products = res}
    )
  }

}
