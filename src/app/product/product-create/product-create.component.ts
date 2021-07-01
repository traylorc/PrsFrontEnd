import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();

  constructor(private syssvc: SystemService,private vndsvc: VendorService, private productsvc: ProductService, private router: Router) { }

  vendors: Vendor[] = [];

  save(): void {
    this.product.vendorId =+ this.product.vendorId;
    console.log(this.product);
    this.productsvc.create(this.product).subscribe(
      res =>{console.debug("Success", res);
    this.router.navigateByUrl("/product/list");
  },
  err =>{console.error(err);}
    )
  }

  ngOnInit(): void {
    this.vndsvc.list().subscribe(
      res => {console.debug("success"); this.vendors = res}
    )
  }

}
