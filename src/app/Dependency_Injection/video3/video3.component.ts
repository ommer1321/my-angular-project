import { Component, Inject } from '@angular/core';
import { ProductService } from '../product-service';
import { logServiceIT } from 'src/app/injection-token';
import { A, B, C, LoggerService } from 'src/app/example-classes/logger-service';

//DI Tanımlama Şekilleri (Aşağıdaki yer app.module.ts sayfasına yazılıyor normalde )
// LoggerService  //DI Token - Default Type Token
// {provide:LoggerService,useClass:LoggerService} // Type Token ( Bu şekilde tanımlamada ilk parametre provide ettiğimiz sınıftan ilk yaptığımız şekildeki gibi referans alarak kullanılıyor ikinci parametrede provide edilmek istenen sınıf  )
// {provide:'ommer1453',useClass:LoggerService}
// ***************************************************************************************************************************************************************
// kural-1453
// Bir çok provide etme türü var
// string olarak provide ettiğimizde  {provide:'ommer1453',useClass:LoggerService} gibi constructor icinde @Inject('ommer1453') private productService:ProductService gibi @Inject ekleyip string token'ı yazmamız gerek
// bir başka tanımlama biçimi Injection  Token *1 olarak tanımlayabiliriz burada ise bir değişken oluşturuyoruz InjectionToken<any> türünden ve bunun içine  new InjectionToken("") şeklinde nesnesi ile referans veriyoruz daha sonra app.module içinde  bunu tanımlıyoruz ({provide:logServiceIT,useClass:LoggerService}) ayrıca injection-token.ts sayfasında toplu olarak tanımlarız bunları
// kullanımda ise string token gibi kullanıyoruz
//
//
//
//
//

@Component({
  selector: 'app-video3',
  template: `asd3`,
})
export class Video3Component {
  // *1
  constructor(
    @Inject(logServiceIT) private productService: ProductService,
    // @Inject('ommer1453') private logService:LoggerService
    // @Inject('URL') private urlFunction: any
    // @Inject('URL') private urlString:string
    // @Inject("useFactory_provider") private logger_useFactory:LoggerService
    // private a:A,
    // private b:B,
    // private c:C,
    
  ) {
    // console.log(urlString);
    // console.log(    urlFunction());
    // console.log(logger_useFactory);
  // console.log(a.name);
  // console.log(b.name);
  // console.log(c.name);
  
  }
}
