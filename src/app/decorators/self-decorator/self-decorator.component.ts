import { Component, Self, SkipSelf } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';

@Component({
  selector: 'app-self-decorator',
  providers: [
    // Comp1Component
  ],
  

  template:   `
   <app-comp3></app-comp3>
   <h1>self Deco : {{comp1.name}} </h1>
  `,
  

})
export class SelfDecoratorComponent {


  constructor(
    // @SkipSelf() 
    public comp1:Comp1Component){


}
}
