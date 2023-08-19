import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-read-product',
  template:   `
  
  <ul>
    <li *ngFor="let product of this.productService.products" >{{product}}</li>
  </ul>
  `,

})
export class ReadProductComponent {

  constructor(public productService:ProductService){

  
}
}
