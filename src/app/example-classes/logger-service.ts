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
