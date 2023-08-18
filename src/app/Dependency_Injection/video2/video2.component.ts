import { Component, Injectable } from '@angular/core';
import { ProductService } from '../product-service';
// kural-1453
// ProductServis sınıfını bulunduğumuz componente inject etmek istiyoruz fakat  ProductServis sınıfına  (logger:Logger) sınıfıı inject ettiğimiz için bizden ProductServis sınıfına @Injectable decoratoru eklememizi ve hangi sınıfıı injecte etmek istiyorsak onuda provider'a eklmeemizi istiyor  bunun anlamı benim ve bağımlı olduğum tüm dependicy'leri injecte et
// yani biz aslında ProductServis'in bir instance'ını cagırıyoruz fakat ProductServis'in bir bağımlı olduğu yer olduğu için bir zincir olmuş oluyor 
// 
// 
// 




@Component({
  selector: 'app-video2',
  template:`asd`
})
export class Video2Component {
constructor(private productService : ProductService){


}
}
