import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// kural-1453
// *1
// query stringler için 2 adet routerLink oluşturduk ve bunlara parametre atayabilmek için  [queryParams] directivi'ni kullandık  ve içine örnekteki gibi parametreler atadık 
// 
// *2
// daha sonra bu query stringlere daha önce ulastugumız gibi ya snopshot yada observer ile ulaştık ve bunlarıda  queryParamMap yada params kullanarak yaptık 
// 
// queryParamsHandling direvtici ile query stringlerin yeni gidecekleri urlde değişmemesini preserve ile  yada hepsinin birleşmesini merge ile yapılıyor
// 
// 
// 
// 
// 
// 
// 
// 
// 


@Component({
  selector: 'app-query-string',
  template: `
  <!-- *1 -->
    <a routerLink="" queryParamsHandling="preserve"  [queryParams]="{ page: 2, size: a }">query string</a> <br>
    <a routerLink="" queryParamsHandling="merge" [queryParams]="{ ommer: 12, ahmet: 'zxcx' }">another query string</a>

  `,
})
export class QueryStringComponent {
  a: any = 'ommer1453';
  b: any  ;
  
  
  constructor(activatedRoute:ActivatedRoute) {

    // *3
    //  console.log(activatedRoute.snapshot.queryParamMap.get('page'));
    //  console.log(activatedRoute.snapshot.params['page']);
    
    activatedRoute.queryParamMap.subscribe({

      next: parameter => console.log(parameter.get('page'))

      // next: parameter => this.b = parameter.get('page')
    })

      
  }



}
