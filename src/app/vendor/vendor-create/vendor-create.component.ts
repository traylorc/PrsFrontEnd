import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();

  constructor(private syssvc: SystemService, private vendorsvc: VendorService, private router: Router) { }


  save(): void {
    this.vendorsvc.create(this.vendor).subscribe(
      res =>{console.debug("Success", res);
    this.router.navigateByUrl("/vendor/list");
  },
  err => {console.error(err);}
    )
  }




  ngOnInit(): void {
  }

}
