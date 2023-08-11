import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

declare var $: any;

@Directive({

// *1
  selector: '[appExample]',




})
export class ExampleDirective implements OnInit{


  // kural-1453
  //# Directive oluşturma
  // 'ng g d directives/example'  ya da 'ng g d --skip-tests  directives/example' (bu kod test spec dosyasını oluşturmaz) kodları ile directive oluştururuz
  // Bir directive oluşturulduğu zaman modüle declare edilmelidir (Cli ile oluşturulduğuda kendisi yapar)
  // ilk olarak import edilir örnekteki gibi '- import { ExampleDirective } from './directives/example.directive'; -' ve @NgModule altındaki  declarations kısmına 'ExampleDirective' class ismi yazılır
  // Directive sınıfının adının sonunda Directive olması zorunluluk değil ama genel kullanımdır
  // @Directive decorator'ı işaretlenmesi sayesinde directive olur ve directive olması için zorunludur.
  // *1  appExample sayesinde uygulama seviyesinde directivi kullanılmasını sağlayan bir referanstır
  // *1 selector özelliği [] ile tanımlandıysa attribute olarak . ile tanımlandıysa class olarak çalışır

  //# Directive ile işaretlenmiş Html nesnesini manupule etmek için constructor'a 'private element: ElementRef' *2 parametresini ekliyoruz ve ElementRef'i import ediyoruz
    // nativeElement kütüphanesi ile yapıyoruz style vb işlemleri
    // 'npm i jquery' commandı ile jquery indirdik ve bu indirdiğimiz jquery'i 'angular.json' içindeki scripte dosya yolunu verdik

//# Directive parametre tanımlamak için @Input *3 ile field oluşturuyoruz   ve daha sonra bu değeri kullanmak için  'OnInit' sınıfını implement ediyoruz ve interface'i olan ngOnInit *4 (constracture gibi uygulama çalışınca çalışır fakat constracture'dan sonra çalışır ) methodu ile işlemleri gerçekleştiriyoruz

//# HostListener *5 ile oluşturduğumuz directive'in hangi evente gerçekleştireceğini ve dinleyeceğini sağlayan bir decoratordür 

//# HostBinding *6 ile oluşturduğumuz directive'in işaretlediği dom nesnesine bir özelliği bind (bağlama) olarak işlemler gerçekleştiriyoruz 




// *2
  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'red';
    $(element.nativeElement).fadeOut(1000).fadeIn(1000);
  }

// *4
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.colorName;

  }
// *3
@Input() colorName:string ='';

// *5
@HostListener('click')
clickFunc(){
alert('HostListener kullnarak öğreniyoruz');
this.element.nativeElement.style.backgroundColor = 'green';
}

// *6
@HostBinding("style.background-color")
 bgColor:string = 'yellow';
}
