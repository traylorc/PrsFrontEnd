import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'searchVendor'
})
export class SearchVendorPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCrit: string): Vendor[] {

    if(vendors == null || searchCrit.length ===0){
      return vendors;
    }

    let search = searchCrit.toLocaleLowerCase();
    let selectedVendors: Vendor[] = [];

    for(let v of vendors){
      if(
        v.id.toString().includes(search)
          || v.code.toLowerCase().includes(search)
            || v.name.toLowerCase().includes(search)
              || v.address.toLowerCase().includes(search)
                || v.city.toLowerCase().includes(search)
                  || v.state.toLowerCase().includes(search)
                    || v.zip.toLowerCase().includes(search)
                      || v.phone.toLowerCase().includes(search)
                        || v.email.toLowerCase().includes(search)
      )
      {selectedVendors.push(v);}
    }
    return selectedVendors;
    
  }

}
