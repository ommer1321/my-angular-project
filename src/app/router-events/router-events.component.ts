import { Component } from '@angular/core';
// kural-1453
// 
// NavigationStart: yeni bir navigasyon başladığı takdirde bir olay tetiklenecek
// 
// RouteRecognized: Yönlendirilmenin gerçekleşeceği rotalar tanımlandığında bu olay tetiklenir
// 
// GuardsCheckStart: Yönlendirilmenin yapılacağı routun mevcut guard'ları tetiklendiğinde bu olay tetiklenir
// 
// ChildActivationRoute: Yönlendirilmenin yapılacağı routun child rotaları tetiklendiğinde bu olay tetiklenir
// 
// ActivationStart: route'ların etkinleştirilmesi sırasında bu bu olay tetiklenir
// 
// GuardsCheckEnd: Guard  yapılanmalarının görevleri sona erdiğinde bu olay tetiklenir
// 
// ResolveStart: Yönlendirme yapılacak sayfanın verileri resolve edilmeye başladığında bu olay tetiklenir
// 
// NavigationEnd: Navigasyon tamamlandığında bu olay tetiklenir
// 
// 
// NavigationCancel: Navigasyon iptal edildiğinde bu olay tetiklenir
// 
// NavigationError: Navigasyon sürecinde bir hata oluştuğunda bir olay tetiklenir
// 
// 
// 
@Component({
  selector: 'app-router-events',
  template: ` 
  
  
  `,
})
export class RouterEventsComponent {

}
