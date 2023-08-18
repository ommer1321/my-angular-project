import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class LoggerService {
  constructor() {
    this.addLog();
  }

  addLog() {
    console.log('log eklendi');
  }
}










export class A{
  // name:string = 'A';
  
name:number = Math.floor(Math.random() * 100) + 1


}


export class B{
  // name:string = 'B';
  name:number = Math.floor(Math.random() * 100) + 1

  
}
export class C{
  // name:string = 'C';
  name:number = Math.floor(Math.random() * 100) + 1

  
}