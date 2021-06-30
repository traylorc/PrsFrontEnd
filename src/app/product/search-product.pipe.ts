import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], searchCrit: string): Product[] {

    if(products == null || searchCrit.length ===0){
      return products;
    }

    let search = searchCrit.toLocaleLowerCase();
    let selectedProducts: Product[] = [];

    for(let p of products){
      if(
        p.id.toString().includes(search)
          || p.partNbr.toLowerCase().includes(search)
            || p.name.toLowerCase().includes(search)
              || p.price.toString().toLowerCase().includes(search)
                || p.unit.toLowerCase().includes(search)
                  || p.photoPath.toLowerCase().includes(search)
                   
      )
      {selectedProducts.push(p);}
    }
    return selectedProducts;
    
  }

}
