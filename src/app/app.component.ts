import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `



  <!-- Ders 1-6 -->
    <!-- <app-home></app-home>

    <app-property-binding></app-property-binding>

    <app-property-binding2 [deneme]="property_binding_2"></app-property-binding2>

    <app-event-binding></app-event-binding>

    <app-two-way-data-binding></app-two-way-data-binding>
    
    <app-attribute-binding></app-attribute-binding>
    
    <app-interpolation-sytax></app-interpolation-sytax>
    
    <app-directive></app-directive> -->
  <!-- Ders 1-6 -->
 
  



  <!-- Ders 7 -->
<!--   
<div appExample colorName='red'>Merhaba</div>

<div class="appExample" >Merhaba</div> -->

  <!-- Ders 7 -->
    

  <!-- Ders 8 -->
  <!-- <div *appCustomIf="true">if denemesi</div> -->

<!-- <div *appCustomFor="10; let i = indexValue">Ommer1453 => {{i}}</div> -->

<!-- <div *appCustomFor="names; let name; let index = i">{{name}} => {{index}}</div> -->

<!-- Ders 8 -->




<!-- Ders 9 -->
<!-- 
<div> {{title | titlecase}} </div>
<div> {{title | slice : 2 : 10}} </div>

<div> {{30.04.2000 | date : 'fullDate'}} </div>
<div> {{30.04.2000 | date : 'dd.mm.yyyy'}} </div> -->

<!-- <h1>{{5 |custom :5}}</h1> -->

<!-- Ders 9 -->
  


<!-- Ders 10 -->


<!-- Ders 10 -->






    
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  title = 'my-angular-project';
  property_binding_2 = 'property-binding-2 input örneği';
  names = ['ömer','faruk','cetin','mf'];
}
