import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  sortColumn: string = "id";
  sortAsc: boolean = true;

  sortFn(column: string): void {
    if(column === this.sortColumn){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }

  searchCrit: string = "";

  vendors: Vendor[] = [];

  constructor(private vendorsvc: VendorService) { }

  ngOnInit(): void {

    this.vendorsvc.list().subscribe(
      res =>{console.debug("Success", res);
    this.vendors = res;
  },
  err =>{console.error(err);}
    )
  }

}
