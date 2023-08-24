import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


// kural-1453
// 
// ActivatedRoute sınıfı ile o anki olan route'u alabiliyoruz ve bunu 2 farklı yol ile yapabiliyoruz ya paramMap yada params kullanarak 
// yine başka bir 2 farklı yöntem ile snapshot yada observer ile de biz bu methodlarımızı çalıştırabiliyoruz
// snopshot 1 kere yenilendiği için observer özelliğini tercih ediyoruz daha çok 
// 
// *1 burda snapshot ve paraMap kullanarak has metodu ile böyle bir parametre varmı yok kontrolü yaptık  varsa true yoksa false dönüyor 
//
// *2 
// burada snapShot ve params kullanrak veriyi aldık direk
// 
// *3
// burada observer ve paraMap kullanrak veriyi aldık ve burada observer bize next içerisindeki değişken ile sonucu bize paraMap türünden dönüyor yani buda şu demek oluyor observer'a ne tür verirsek o türden bize dönüyor 
// 
// *4
// burada da params türünden observer ile işlem yapıyoruz
// 

@Component({
  selector: 'app-read-product',
  template: `
    <ul>
      <li *ngFor="let product of this.productService.products">
        {{ product }} -
      </li>
      <a [routerLink]="[product]">product 31</a>
    </ul>
  `,
})
export class ReadProductComponent {
  product: any = 31;

  constructor(
    public productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    // *1
    const hasId = activatedRoute.snapshot.paramMap.has('id');
    
    console.log(hasId);
    const hasId2 = activatedRoute.snapshot.paramMap.has('ahmet');
    
    console.log(hasId2);
    // *2
    const hasIdGet = activatedRoute.snapshot.params['id'];
    
    console.log(hasIdGet);
    const hasIdGet2 = activatedRoute.snapshot.paramMap.get('ahmet');
    
    if (hasIdGet2) {
      console.log(hasIdGet2);
    }

    // *3
    activatedRoute.paramMap.subscribe({
      next: (parameter) => console.log(parameter.get('id')),
    });

    // *4
    activatedRoute.params.subscribe({
      next: (parameter) => console.log(parameter['id']),

    });

  }
}
