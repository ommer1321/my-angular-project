import { Component } from '@angular/core';
// kural-1453
// şimdi parent child ilişkisini öğreniyoruz 
// öncelikle route listemizde parent ve childlarımızı oluşturuuyoruz oyüzden routes.ts sayfasına git ve *5 den devam et
// 
// geri geldiğimizie göre ilk olarak burada bir routerLink ile child dosyamıza yönlendirme yapıyoruz ve bu cild'ı acması için router-outlet tanımlıyoruz
//  ve bu işlem için ParentChild1Component classının olduğu dosyaya gidiyoruz
//  
// 
// 
// 
// 
// 
// 


@Component({
  selector: 'app-parent-product',
  template: `

<br>
<a style="color: blueviolet;" routerLink="child-1/31">Child-1  Component</a> 
<router-outlet></router-outlet>

  
  `,
})
export class ParentProductComponent {
}
