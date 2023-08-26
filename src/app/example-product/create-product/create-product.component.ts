import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  template:   `

  <input #toAddProductBtn  type="text" name="" id="">
  <button (click)="addProduct(toAddProductBtn.value)">Create Product</button>
  
  `



})
export class CreateProductComponent {
  // @ViewChild('toAddProductBtn') inputElement: ElementRef;



  constructor(private productService:ProductService , private activatedRoute: ActivatedRoute , private router:Router){

    // data-passing için oluşturuldu *1453
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }


  
  
  addProduct(product:string){
    
    this.productService.createProduct(product)
    // console.log(this.inputElement.nativeElement.value);
    // this.inputElement.nativeElement.value = ''
    
  }
}
