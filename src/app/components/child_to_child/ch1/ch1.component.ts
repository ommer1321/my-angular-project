import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// kural-1453
// veri bu componentten cıkacaktır oyüzden @Output decoratoru ile bir değişken oluşturuyoruz ve bu değikene EventEmitter referansı atıyoruz
// referans atadıktan sonra bu referansı tetikleyecek bir event oluşturmamız gerek bunuda OnInit class'ı ile yapıyoruz ve implemente ediyoruz 
// implemente ettikten sonra nbOnInit() methodu ile oluşturduğumuz send_data değişkenini burada emit ediyoruz ve göndermek istediğimiz datayı giriyoruz içine 
// ve burdan parent componentine gidiyoruz 
// 





@Component({
  selector: 'app-ch1',
  template:`
  
  `,
})


export class Ch1Component implements OnInit {
  ngOnInit(): void {

    this.send_data.emit(this.data);

  }

  data:any ='ommer1453'
 
  @Output()
   send_data:EventEmitter<any> = new EventEmitter();


}
