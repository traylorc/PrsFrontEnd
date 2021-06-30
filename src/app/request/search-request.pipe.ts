import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'searchRequest'
})
export class SearchRequestPipe implements PipeTransform {

  transform(requests: Request[], searchCrit: string): Request[] {
    
    if(requests == null || searchCrit.length ===0){
      return requests;
    }

    let search = searchCrit.toLocaleLowerCase();
    let selectedRequests: Request[] = [];

    for(let r of requests){
      if(
        r.id.toString().includes(search)
          || r.description.toLowerCase().includes(search)
            || r.justification.toLowerCase().includes(search)
              || r.rejectReasoning.toString().toLowerCase().includes(search)
                || r.deliveryMode.toLowerCase().includes(search)
                  || r.status.toLowerCase().includes(search)
                    || r.total.toString().toLowerCase().includes(search)
                      
                   
      )
      {selectedRequests.push(r);}
    }
    return selectedRequests;

  }

}
