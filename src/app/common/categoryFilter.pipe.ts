import { Pipe } from "@angular/core";
import { Product } from "../model";

@Pipe({
  name: 'filter',
  pure: false
})
export class PaCategoryFilterPipe {

  transform(products: Product[], category: string) {
    return (category == undefined || category == "") ?
      products : products.filter(p => p.category == category);
  }
}
