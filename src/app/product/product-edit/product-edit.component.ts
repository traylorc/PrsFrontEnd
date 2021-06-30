import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product();
  id: number = 0;

  constructor(private syssvc: SystemService, private productsvc: ProductService, private router: Router, private route: ActivatedRoute) { }

  update(): void{
    this.productsvc.edit(this.product).subscribe(
      res =>{console.debug("Success", res);
    this.router.navigateByUrl("/product/list");
  },
  err =>{console.error(err);}
    )
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  this.productsvc.getByPk(this.id).subscribe(
    res =>{console.debug("Success", res);
  this.product = res;
},
err => {console.error(err);}
  )  }

}
