import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable({
providedIn :'root'  // Hizmeti uygulama düzeyinde enjekte etmek için

})
export class ProductService {
  
  
  
      getProducts(): Product[] {


    return [
        { product_name :'Araba', product_id : 1  },
        { product_name :'Tır', product_id : 2  },
        { product_name :'Motor', product_id : 3  }
];
  }




}
