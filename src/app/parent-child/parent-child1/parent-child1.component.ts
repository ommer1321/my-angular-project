import { Component } from '@angular/core';
// kural-1453
// 
// bu component artık ekranda geliyor ve burada bu componentin alt childları olan 2 diğer component için routerLinkişlemi yapacağız bu sayede iç içe component getirmiş olacağız
// bunları oluşturduktan sonra bu diğer componentler için router-outlet tanımlıyoruz ve diğer componentlerin içerkleri ve tasarımları hazırsa artık tüm seri calısıyor halde tebrikler
// 
// 
// 
// 

@Component({
  selector: 'app-parent-child1',
  template:`
 <br> burası child1 komponent
  <br>

  <hr>
  <a style="color:saddlebrown;" routerLink="child-2">Child-2  Component</a> & <a style="color: teal;" routerLink="child-3">Child-3  Component</a> 

  <router-outlet></router-outlet>
 `,
})
export class ParentChild1Component {

}
