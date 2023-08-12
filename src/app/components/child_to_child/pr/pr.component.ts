import { Component } from '@angular/core';

// kural-1453
// child to child componentlerde kapsam olarak bir parent komponent olur ve biz bu komponent aracılığı ile diğer 2 komponenti konuştururuz
// ilk olarak ch1 component sayfasına gidiniz ve ordan devam ediniz 
// 
// ch1'den buraya geldik  
// ch1 içinde oluşturduğumuz ve buraya gönderdiğimiz send_data yı app-ch1 selector icine tanımlıyoruz ve  parent içinde bir parametreli function oluşturuyoruz ve send_datadan gelen veriyi alabilmek için ve selector icine bu function'u send_data ile bind ediyoruz fakat burada function içine parametre olarak ($event) giriyoruz 
// daha sonra bu function icinden gelen veriyi alıyor parent icinde oluşturduğumuz başka bir değişkene atıyoruz  ve bu değişkeni de atarken aslında parent to child şeklinde aatığımız icin önce ch2 sayfasına gitmemiz gerekiyor
// ch2 2 componentine gidiz
// 
// ch2'den buraya geldik  
// ch2'de  oluştruduğumuz data değişkenine veri atamak için parentta oluşturduğumuz data ile app-ch2 selectoru içinde bind ediyoruz 
// ve artık child to child componentleri arası veri ataması tamamlandı


@Component({
  selector: 'app-pr',
  template: `
   
   <app-ch1 (send_data)="ch2_function($event)"></app-ch1>
   
   <h1 style="color: red;">{{data}}</h1>

    <app-ch2 [data]="data"></app-ch2>
  `,
})
export class PrComponent {

  data:any 

  ch2_function(ch2_gelen_data: any) {

    console.log(ch2_gelen_data);

    this.data =  ch2_gelen_data

  }
}
