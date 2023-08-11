import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',

 // kural-1453 event-binding aslında butona function atama olayıdır bunu kullanmak için *1 da örnekte olduğu gibi bir function tanımlıyoruz daha  sonra bunu aşağıdaki *2 ile   (click) yada on-click ile tetikleyebiliyoruz
  template: ' <h1><input type="submit" (click)="btnClick()" ></h1> ',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
// *1
btnClick(){

  console.log('butona tıkladınız')


}
}
