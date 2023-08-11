import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  // kural-1453 attribute-binding ve style-class-binding html nesnelerinin style ve classlarına veya attributelerini manupule edebiliyoruz
  // mesala *1 burada bir değer atıyoruz ve atadığımız değeri *2 -[style.background-color]="color"- da ki gibi style'a atayarak değiştiriyoruz
  // bunun aynısını attribute-binding içinde gercekleştiriyoruz fakat hata veriyor *3 *4
  
  template: `
    <div style="background-color: red;" [style.background-color]="color">
      asd
    </div>
    <br />
    <!-- *3 -->
    <!-- <div [height] = 'height' ></div> -->
 

  `,
  styleUrls: ['./attribute-binding.component.scss'],
})
export class AttributeBindingComponent {
  //  *1
  color: string = 'blue';
  // *4
  height: number = 21;
}
