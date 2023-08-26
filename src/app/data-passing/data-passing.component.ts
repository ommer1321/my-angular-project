import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// kural1453
// Route Data Passing gizli veri aktarmak için kullanılır  *1 ki gibi [state] ile veri tanımladıktan sonra bulunduğumuz classda ActivatedRoute'u injekte ediyoruz  bunun   this.activatedRoute.data.subscribe ile veriye ulaşabiliyoruz
// 
// this.router.getCurrentNavigation()?.extras.state sayesinde de dinamik olarak gönderdiğimiz verileri cekebiliyoruz CreateProductComponent sınıfının constracturunda yer almakatadır *1453
// 
// 
// 
// 
// 
// 



@Component({
  selector: 'app-data-passing',
  template: ` 
  <!-- *1 -->
  <a [state]="{key1:'ommer',key2:1453}" routerLink="/product/create">a</a>
  data `,
})
export class DataPassingComponent implements OnInit{


  constructor(private activatedRoute: ActivatedRoute , private router:Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);

    
  }


  ngOnInit() {
    this.activatedRoute.data.subscribe(data=>{

      console.log( data)
         })

  }
}
