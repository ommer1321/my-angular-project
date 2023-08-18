import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product-service';

// kural-1453
// ilk olarak inject'e edeceğimiz classı ya component içinde *1 yada ilgili componentin declare (tanımlandığı) modül içndeki provider içine tanımlıyoruz bu sayede injecte etmek için bir bağ kurmuş oluyoruz bir nevi 
// daha sonra hangi componentte işlem yapacaksak o componentte bir  constructor oluşturuyoruz ve içine inject ediyoruz *2 (private productService:ProductService )
// 
// 
// Not : @Injectable Decoratorunu  injecte ettiğimiz class da kllanırsak providera gerek kalmadan injecte edebiliriz bunu @Injectable konusunda detaylı işlenecek 
// 



@Component({
  selector: 'app-video1',
  // *1
  // providers:[Product,ProductService],
  template :`
<button (click)="deneme()">Buton</button> 
  
  `,
})
export class Video1Component {
  product_servis :ProductService; 
  product_ :Product; 

  // *2
  constructor(private productService:ProductService , private product:Product){
    this.product_ = product
    this.product_servis = productService; 
   
     

  }

  
  deneme(){

    console.log(this.product_servis.getProducts());
    console.log(this.product_);
  }
   


}
