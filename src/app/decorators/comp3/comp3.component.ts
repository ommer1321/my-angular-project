import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';

@Component({
  selector: 'app-comp3',
  providers: [
    Comp1Component
  ],
  template:   `
  <app-comp2></app-comp2>
 <h1>comp 3 :  {{comp1.name}}</h1>
  `,

})
export class Comp3Component {
  constructor(
    // @SkipSelf()
    @Optional() @Self()
      public comp1:Comp1Component){


  }

}
