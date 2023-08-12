import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

// kural-1453
//
// ngOnChanges :  componente Input aracılığı ile herhangi bir data girişi çıkışı olduğu zaman çalışır
// Chat Gpt yazısı
// Bu yöntem, bileşene gelen girdi değerleri değiştiğinde tetiklenir. Bu özellikle @Input dekoratörü ile işaretlenmiş girdi değerleri için kullanılır. Girdi değeri değiştiğinde, bileşende yapılması gereken güncellemeler burada yapılabilir.
//
// ngOnInit : component dataları vs ayarlandıktan sonra ilk kez component oluşturulduğunda çalışır
// Chat Gpt yazısı
// Bu yöntem, bileşen oluşturulduğunda ve giriş değerleri ayarlandıktan sonra çağrılır. Bileşenin başlangıç durumuyla ilgili işlemler genellikle bu yöntemde yapılır.
//
// ngDoCheck : component içerisinde her bir değişiklikte bu method tetiklenir ve çalışır (Change Detection Döngüsünde Çalışıyor Muş)
// Chat Gpt yazısı
// Bu yöntem, Angular'ın değişiklik algılama mekanizması tarafından sürekli olarak kontrol edilir. Herhangi bir değişiklik algılandığında çağrılır. Ancak bu yöntem sıkça tetiklendiği için performans konusunda dikkatli olunmalıdır.
//
// ngAfterContentInit : component içeriği tamamlandıktan sonra çalışır
// Chat Gpt yazısı
// Bu yöntem, bileşenin içeriği ng-content ile doldurulduktan sonra çağrılır. Bileşenin içeriğiyle ilgili işlemler burada yapılabilir. Bu bileşen ng-content kullanarak doldurulduğunda, içerik tamamlandığında ngAfterContentInit yöntemi çağrılır.
//
//
// ngAfterContentChecked : component içeriğindeki her bir değişiklikte tetiklenir
// Chat Gpt yazısı
// Bu yöntem, bileşenin içeriğinde herhangi bir değişiklik algılandığında veya herhangi bir değişiklik yapıldığında çağrılır. Ancak bu yöntem de sıkça tetiklendiği için performansı etkileyebilir.Bu bileşenin içeriği değiştiğinde veya herhangi bir değişiklik yapıldığında ngAfterContentChecked yöntemi çağrılır.
//
//
// ngAfterViewInit : component templati tamamen yüklendikten sonra tetiklenir
// Chat Gpt yazısı
// Bu yöntem, bileşenin görünüm hiyerarşisi oluşturulduktan sonra çağrılır. Görünümle ilgili işlemler burada yapılabilir.Bu örnek bileşenin görünüm hiyerarşisi oluşturulduğunda ngAfterViewInit yöntemi çağrılır ve görünümdeki bir öğenin rengini değiştirir.
//
//
// ngAfterViewChecked : component templatinde herhangi bir değişiklik olduğu zaman tetiklenir
// Chat Gpt yazısı
// Bu yöntem, görünüm hiyerarşisinde herhangi bir değişiklik algılandığında veya görünümde herhangi bir değişiklik yapıldığında çağrılır. Ancak bu yöntem de sıkça tetiklendiği için performansı etkileyebilir.Bu örnek bileşende görünümde herhangi bir değişiklik olduğunda ngAfterViewChecked yöntemi çağrılır.
// 
// OnDestroy : component yok edilmeden hemen önce son kez çalışır
// Chat Gpt yazısı
// Bu yöntem, bileşen yok edilmeden önce çağrılır. Bileşenle ilişkilendirilen kaynakların (abonelikler, zamanlayıcılar, vb.) serbest bırakılması için kullanılır.





@Component({
  selector: 'app-component-life-cycle-hooks',
  template: `
    <h1>{{ data }}</h1>
    <h1>{{ data2 }}</h1>
  `,
})
export class ComponentLifeCycleHooksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{


  @Input() data: any;
  @Input() data2: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      console.log('1) ngOnChanges tetiklendi');
    }
  }

  ngOnInit(): void {
    console.log('2) ngOnInit tetiklendi');
  }

  ngDoCheck(): void {
    console.log('3) ngDoCheck tetiklendi');
  }

  ngAfterContentInit(): void {
    console.log('4) ngAfterContentInit tetiklendi');
  }

  ngAfterContentChecked(): void {
    console.log('5) ngAfterContentChecked tetiklendi');
  }

  ngAfterViewInit(): void {
    console.log('6) ngAfterViewInit tetiklendi');
  }

  ngAfterViewChecked(): void {
    console.log('7) ngAfterViewChecked tetiklendi');

  }

  ngOnDestroy(): void {

    console.log('8) ngOnDestroy tetiklendi');

  }
}
