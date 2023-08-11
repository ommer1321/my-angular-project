import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
 // kural-1453 text interpoletion binding class içerisinde *1 gibi değer tanımladıktan sonra template icerisinde bu örnek şekilde (<h1>{{title}}</h1>) veriyi ekrana basarız 
  template : ' <h1> {{title}}</h1> ',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
title= 'text interpoletion binding';
}
