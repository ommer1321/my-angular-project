import { Component, Injectable, Optional, Self, SkipSelf } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';
// kural-1453
// https://medium.com/@1453o.faruk/self-skipself-optional-angular-d083581a1679
// 
// 
// 
// 


@Component({
  selector: 'app-comp2',
  providers: [
    // Comp1Component
  ],
  template:   `
  <app-comp1></app-comp1> 
  <h1>comp 2 :{{comp1.name}}</h1> 
  
  `,

})
export class Comp2Component {
  constructor(
    @Optional() @SkipSelf()
      public comp1:Comp1Component){


  }
}
