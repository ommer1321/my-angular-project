import {  LoggerService } from '../example-classes/logger-service';
import { Product } from './product';
import { Injectable } from '@angular/core';

// kural-1453
// ProductServis sınıfına  (logger:Logger) sınıfıı inject ettiğimiz için bizden ProductServis sınıfına @Injectable decoratoru eklememizi istiyor bunun anlamı benim ve bağımlı olduğum tüm dependicy'leri injecte et
// 
// 
// 
// 



@Injectable({
providedIn :'root'  //  uygulama düzeyinde enjekte etmek için

})
export class ProductService {
  
  constructor(private logger:LoggerService){

  }
  
      getProducts(): Product[] {


    return [
        { product_name :'Araba', product_id : 1  },
        { product_name :'Tır', product_id : 2  },
        { product_name :'Motor', product_id : 3  }
];
  }




}
