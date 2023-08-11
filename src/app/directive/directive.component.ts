import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  //  kural-1453 ön tanımlı directiveler  ngFor - ngIf - ngSwitch - ngClass - ngStyle - ngModel - NgNonBindable
  //   ngFor directivi için önce bir dizi  tanımladık *2 ve o diziyi *1 gösterildiği gibi kullanımı vardır let yada as ile değişken tanımı veya itteration (index, last ,first) vb tanımı yapılabilir
  //   ngIf directivi içim  önce bir boolean değer tanımladık *3 eğer bu değer true ise if *4 çalışıyor eğer false ise çalışmıyor
  //   ngIf 'in else kısmında ise  else  eklendi *5 ve biz bu else'i np-template *6 ile kontrol ediyoruzz işlem else kısmına düşünce np-template tetikleniyor ve etiketli html nesnesi çalışıyor
  //   ngIf 'in else if kısmında ise ng'nin bir geliştirmesi bulunmamaktadır bizde ng-template ve ngIf kullanarak *7 bir mantıksal yapı ile iç içe etiketler basmaktayız
  //   ngSwitch directivi öncelikle * ile başlamaz [] icerisinde yazılır ve *8  kontrolü yapılcak değeri icine atıyoruz [ngSwitch]="sayi" ve bulunduğu nesnenin icine *ngSwitchCase="1" , *ngSwitchCase="2" gibi caseleri yazıyoruz hicbiri calısmazsa  *ngSwitchDefault  ile belirttiğimiz case calısıyor
  //   ngClass directivi öncelikle * ile başlamaz [] icerisinde yazılır *9  ve [ngClass]="class_name" gibi karşılaştırılır eğer bu adda bir class bulunuyor ise kod calısır
  //  ngModel  özelliği two-way-data-binding.component.ts dosyasında  anlatıldı *11
  //  ngNonBindable ile buluduğu html nesnesindeki tüm şnterpolation'ları pasife cekerek dönüştürmeden gösterir {{sayi}} gibi *12

  template: `
    <!-- *1 -->
    <h4
      *ngFor="
        let name of names;
        index as i;
        first as first;
        last as last;
        let isEven = even;
        let isOdd = odd
      "
    >
      {{ name }} => {{ i }} first =>{{ first }} last => {{ last }} -
      {{ isEven }} -{{ isOdd }}
    </h4>

    <!-- *4 -->
    <div *ngIf="visiable">
      <span style="background-color: green;"> görünür</span>
    </div>

    <!-- *5 -->
    <div *ngIf="visiable; else elseDirective">
      <span style="background-color: greenyellow;">if görünür</span>
    </div>

    <!-- *6 -->
    <ng-template #elseDirective
      ><span style="background-color: yellow;">else görünür</span>
    </ng-template>

    <!-- *7 -->
    <div *ngIf="val == 0; else elseIf1">
      <span style="background-color: red;">else if görünür</span>
    </div>

    <ng-template #elseIf1>
      <div *ngIf="val == 1; else elseIf2">
        <span style="background-color: blue;">else if görünür</span>
      </div>
    </ng-template>

    <ng-template #elseIf2>
      <div>
        <span style="background-color: gray;">else if görünür</span>
      </div>
    </ng-template>

    <!-- *8 -->

    <h2 [ngSwitch]="sayi">
      <span *ngSwitchCase="1" style="background-color: aquamarine;"
        >sayi 1</span
      >
      <span *ngSwitchCase="2" style="background-color: aqua;">sayi 2</span>
      <span *ngSwitchCase="3" style="background-color: gold;">sayi 3</span>
      <span *ngSwitchDefault style="background-color:black;">Default</span>
    </h2>

    <!-- *9 -->
    <div [ngClass]="cl">bu class</div>

    <!-- *10 -->
    <div [ngStyle]="styleName">bu style ile yapıldı</div>

    <!-- *11 -->
    <input [(ngModel)]="sayi" type="text" />

    <input [(ngModel)]="sayi" type="text" />

    <!-- *12 -->
    <h1 ngNonBindable>{{ sayi }}</h1>
  `,

  styles: ['.myClass{background-color:purple;} any{}'],
})
export class DirectiveComponent {
  // *2
  names: string[] = ['ali', 'Mehmet', 'Ömer', 'Furkan'];
  // *3
  visiable: boolean = true;
  val: number = 1;
  sayi: number = 3;
  cl = 'myClass';

  styleName: any = {
    'background-color': 'red',
    color: 'white',
  };
}
