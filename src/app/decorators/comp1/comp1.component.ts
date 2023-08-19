import { Component, Injectable } from '@angular/core';
@Injectable({
  providedIn :'root'  //  uygulama düzeyinde enjekte etmek için
  
  })

@Component({
  selector: 'app-comp1',
  template:   ` 


  `,
})
export class Comp1Component {
_name:number;
  
constructor(){
  this._name = Math.floor(Math.random() * 100) + 1
}

get name() : number{

  return this._name;
}
}
