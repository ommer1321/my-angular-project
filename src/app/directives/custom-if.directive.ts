import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]',
})
// kural-1453
// TemplateRef direktifin kullanıldığı templati temsil eder  
// ViewContainerRef teplatin içeriğini içeren conteiner'ın referansıdır  
// ilk olarak *1 deki constructor tanımlamalarını yapıyoruz 
// daha sora set ile selector ismiyle aynı bir değişken *2 oluşturuyoruz ve bunu @Input decorator'u ile yapıyoruz ki veriyi componentten bind edetmek için  
// value değeri bizim component tarafından aldığımız veri ve bunun üzerinden işlemler yapıyoruz
//  createEmbeddedView  ve templateRef ile html'görüntümüz üzerinde manupulasyonlar yapıyoruz 

//  bu da component tarafında kullanımı true ise değer directive tarafında value içine girerek işleniyor ve görüntü veriliyor yada verilmiyor
// <div *appCustomIf="true">if denemesi</div>



export class CustomIfDirective {
  constructor(
    // *1
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  // *2
  @Input() set appCustomIf(value: boolean) {
    if (value) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
