import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding2',

  // kural-1453 property-binding-2 input örneği için ilk olarak import alanına (Input) tanımlıyoruz
  // daha sonra class alanına *1  şeklinde tanımlama yapıyoruz ve bu tanımladığımız değeri templatimizde *2 gibi yerleştiriyoruz 
  // daha sonra ana componentte bu tanımlamayı yapıyoruz ( <app-property-binding2 [deneme] = 'property_binding_2'></app-property-binding2> ) ve burada *1 de tanımladığımız değeri [] içerisinde tanımlayıp  o sayfada göndermek istediğimiz değere eşitliyoruz

  // *2 
  template: ' <h2>{{deneme}}</h2> ',
  styleUrls: ['./property-binding2.component.scss'],
})
export class PropertyBinding2Component {
  // *1
  @Input() deneme: string = '';
}
