import { Component } from '@angular/core';


// kural-1453
// componentler arası veri gönderirken parent ve child olarak adlandırılır 
//( parent to child ) parent'tan child'a veri gönderirken child @Input decoratorü ile bir bind işlemi için değişken oluşturulur daha sonra parent componenti içinde çağırılan selectorunun içinde bu değişken cağrılır ve parent componentinden gönderilmek istenen data  [data]="send_data" örneği *1 gibi child içine yollanır 
// 


@Component({
  selector: 'app-parent1',
  template:`
  <h1>{{title}}</h1>
  
  <hr>
  
  <!-- <app-child1 [data]="send_data" ></app-child1> -->
  
  <app-child1 (send_data)="child_to_parent_func($event)" ></app-child1>
  
  
  
  
  
  `,
})
export class Parent1Component {
title:string = 'parent component'
send_data:any = 'gönderilen veri :=)'


child_to_parent_func(gelen_data:any){
console.log(gelen_data)

  // debugger; //bu kod event içinde ne olduğunu kontorol etmek için kullanılıyor 


}



}
