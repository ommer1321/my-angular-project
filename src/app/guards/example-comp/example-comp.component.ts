import { Component } from '@angular/core';

@Component({
  selector: 'app-example-comp',
  template: ` 
  
  Buraya erişebildiniz tebrikler..

  <a style="color: gray;" routerLink="guard-child">Erişmeye Çalış Child</a>
<router-outlet></router-outlet>
  
  `,
})
export class ExampleCompComponent {

}
