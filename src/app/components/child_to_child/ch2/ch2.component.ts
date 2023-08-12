import { Component, Input } from '@angular/core';

// kural-1453
// parent sayfasından gelecek değikeni karşılamamız için oncelıkle @Input decorator'lu bir değişken oluşturuyoruz
// ve bu olusturduğumuz değikeni template kısmında gelen veriyi görüntülemek için basıyoruz
// burda işlemimiz bitti parenta geri dönünüz
// 
// 
// 
// 

@Component({
  selector: 'app-ch2',
  template:`
  
  <h1 style="background-color: blue;">
    {{data}}
  </h1>
  `,

})
export class Ch2Component {

  @Input() data:any 

}
