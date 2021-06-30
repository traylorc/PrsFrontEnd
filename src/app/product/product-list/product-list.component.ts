import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

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

  products: Product[] = [];

  constructor(private productsvc: ProductService) { }

  ngOnInit(): void {

    this.productsvc.list().subscribe(
      res =>{console.debug("Success", res);
    this.products = res;
  },
  err =>{console.error(err);}
    )
  }

}
