import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor = new Vendor();
  id: number = 0;

  
  constructor(private syssvc: SystemService, private vendorsvc: VendorService, private router: Router, private route: ActivatedRoute) { }

  update(): void {
    this.vendorsvc.edit(this.vendor).subscribe(
      res =>{console.debug("Success", res);
    this.router.navigateByUrl("/vendor/list");
  },
  err =>{console.error(err);}
    )
  }


  ngOnInit(): void {

   this.id = this.route.snapshot.params.id;
   this.vendorsvc.getByPk(this.id).subscribe(
     res =>{console.debug("Success", res);
    this.vendor = res;
  },
  err =>{ console.error(err);}
   )
  }

}
