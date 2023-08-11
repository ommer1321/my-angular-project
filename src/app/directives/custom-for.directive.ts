import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomFor]',
})
// kural-1453
// $implicit ile component tarafında veriyi direk atamadan ismiyle çağırabiliyoruz yada i : i örneği gibi isim ile tanımlayarak component tarafında çağıra biliyoruz 
// 
// names dizisini bind ediyoruz ve value değeri olarak directivimize geliyor daha sonra bu dizinin boyutu ile for döngüsü oluşturuyoruz ve bu döngüde herbir değeri basıyoruzbunu yaparkende index değerini ve value[i] içindeki değeri alıp componente gönderiyoruz implict sayesinde name olarak hiç tanımlama yapmadan isimi alıyoruz ama index değerini tanımlama yaparak almamız gerekiyor çünkü sınır 1 
// <div *appCustomFor="names; let name; let index = i">{{name}} => {{index}}</div>


export class CustomForDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input()
  set appCustomFor(value: string[]) {
    for (let i = 0; i < value.length; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
  //  *1
        $implicit: value[i],
        i : i
      });
    }
  }

  // @Input()
  // set appCustomFor(value: number) {
  //   for (let i = 0; i < value; i++) {
  //     this.viewContainerRef.createEmbeddedView(this.templateRef, {
  //       indexValue: i,
  //     });
  //   }
  // }
}
