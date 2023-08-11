import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  // templateUrl: './property-binding.component.html',
  // kural-1453 property-binding class içerisinde  *1 tanımlamısını yaptıktan sonra nesne üzerinde (<img [src]="src">) gibi bir tanımlama yapılarak değer atanıyor
  template: ' <img [src]="src" [alt]="alt"> ',
  styleUrls: ['./property-binding.component.scss'],
})
export class PropertyBindingComponent {
  // *1
  src: string = 'property binding';
  alt: string = 'property binding';
}
