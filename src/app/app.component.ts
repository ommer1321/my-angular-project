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

<!-- <app-parent1></app-parent1> -->

<!-- <app-pr></app-pr> -->

<!-- Ders 10 -->




<!-- Ders 11 -->

<!-- <app-component-life-cycle-hooks [data]="title" [data2]="names"></app-component-life-cycle-hooks>

<input type="text" [ngModel]="title"> -->

<!-- Ders 11 -->


<!-- Ders - 13 -->

<!-- <app-template-driven-form></app-template-driven-form> -->

<!-- Ders - 13 -->


<!-- Ders 14  -->
<!-- <app-model-driven-form></app-model-driven-form> -->
<!-- Ders 14  -->



<!-- Ders 16  -->
<!-- <app-built-in-validations></app-built-in-validations> -->


<!-- Ders 16  -->




<!-- Ders 17  -->
<!-- <app-video1></app-video1> -->
<!-- Ders 17 -->


<!-- Ders 18 -->
<!-- <app-video2></app-video2> -->
<!-- Ders 18 -->


<!-- Ders 19 -->
<!-- <app-video3></app-video3> -->
<!-- Ders 19 -->
    

<!-- Ders 20  -->
<!-- <app-self-decorator></app-self-decorator> -->
<!-- <app-comp3></app-comp3> -->
<!-- Ders 20  -->



<!-- Ders 21  -->
<!-- <app-create-product></app-create-product>
<hr>
<app-read-product></app-read-product> -->
<!-- Ders 21  -->


<!-- Ders 22 -->

<!--  bu bizim normal routerLink kullanımımız |   routerLinkActive sayeesinde aktif olduğumuz url e css tanımlayabiliyoruz  -->
<!-- <a routerLink="products" routerLinkActive="activeLink">Products</a> | -->
<!-- bu bizim array şeklinde olan routerLink kullanımımız -->
<!-- <a [routerLink]="['product','create']"  routerLinkActive="activeLink">Create</a> -->
<!-- <hr> -->
<!-- <router-outlet></router-outlet> -->
<!-- Ders 22 -->


<!-- Ders 25 -->
<!-- <a style="color: blue;" routerLink="parent-product">Parent Component</a> 
<hr>
<router-outlet></router-outlet> -->
<!-- Ders 25 -->

<!-- Ders 26 -->
<!-- <app-query-string></app-query-string> -->
<!-- Ders 26 -->

<!-- Ders 27 -->
<a routerLink="guard-yes" >Erişim izni al</a>
<hr>
<router-outlet></router-outlet>

<!-- Ders 27 -->




  `,
  styles:[".activeLink{color:orange}"],
  styleUrls: [],
})
export class AppComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 2', 'Item 2', 'Item 2', 'Item 2', 'Item 2'];

  title = 'my-angular-project';
  property_binding_2 = 'property-binding-2 input örneği';
  names = ['ömer','faruk','cetin','mf'];
  
}
