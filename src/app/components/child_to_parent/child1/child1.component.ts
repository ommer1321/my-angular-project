import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// kural-1453
// child'dan parent'a veri göndermek için öncelikle @Output decorator'ü ile bir değişken oluşturup buna EventEmitter<any> = new EventEmitter(); referansı veriyoruz
// bu oluşturduğumuz değişkeni tetikleyebilmek için OnInit class'ını implemente ediyoruz ve interface'i ile gelen ngOnInit() methodu ile bu olşturduğumuz değişkeni (send_data) burada .emit ile içine parametre girerek parent tarafına gönderiyoruz.  
// parent tarafında  gönderdiğimiz değişkeni karşılayacak bir function oluşturup bu functiona parametre atıyoruz ( child_to_parent_func(gelen_data:any){} )  
// child selectoru üzerinde bind işlemlerini yaptıkdan sonra function içine de $event adında bir parametre veriyoruz ve artık data geliyor (    <app-child1 (send_data)="child_to_parent_func($event)" ></app-child1> )

// 
// 


@Component({
  selector: 'app-child1',
  template: ` <h1>child component -
    
    <!-- {{ data }} -->
    
    </h1> `,
})
export class Child1Component implements OnInit {
 
  ngOnInit(): void {

    this.send_data.emit(this.data);

  }

  
  @Input()
   data: any ='bu data child tarafından parenta armağan olsun';
 
  
  @Output()
   send_data: EventEmitter<any> = new EventEmitter();
}
