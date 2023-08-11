import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  // kural-1453 two-way-data-binding öncelikle app.modules.ts icindeki import alanına "FormsModule" ekle ekliyoruz ve daha sonra ngmodel kullanılabilir hale geliyor
  // daha sonra  *1 değer oluşturuyoruz ve bu değeri *2 kısmındaki inputa - [(ngModel)] = "deneme" - şeklinde bağlıyoruz ve artık veriyi işlenebilir hale getirebiliriz
  //  *** (ngModelChange) ile değişiklik tetikleyip hata vs fırlatabiliriz
  // *2
  template: `
    <input type="text" [(ngModel)]="deneme" />

    <br /><br />

    <input type="text" [(ngModel)]="deneme" />
    <h1>{{ deneme }}</h1>
  `,
  styleUrls: ['./two-way-data-binding.component.scss'],
})
export class TwoWayDataBindingComponent {
  // *1
  deneme: string = '';
}
