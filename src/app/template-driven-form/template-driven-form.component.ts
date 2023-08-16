import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

// kural-1453
// ilk olarak FormsModule sınıfını uygulamanın module kısmına import etmemiz gerekiyor
// #frm="ngForm" örneğinde olduğu gibi *3 formumuzu referans edeeğimiz ngForm directive'ini kullanıyoruz ve form gönderildiğinde yakalayabileceğimiz method için ngSubmit directive'i ayarlıyoruz ve bunun içine frm.value diyerek formun içindeki verileri de bu function içine atmış oluyoruyoruz
// form değerlerinin çalışması için ngModel directive'i ile işaretlenmiş olması gerek ve name adlarını kullandığı için name kısımları tanımlı olması gerek
//  grup halide veri oluşturmak için ngModelGroup="address" *2 örneği gibi div veya başka bir html nesnesi oluşturuyoruz ve icinde tanımlama yapıyoruz
//  @ViewChild('frm', { static: true }) frm: NgForm; ile  formu component class'ında referansetmek için kullanıyoruz
//  this.frm.setValue  4* ile form nesnelerine default value atanabiliyor fakat bu metod tüm nesnelere atmak zorunda bırakıyor  
//  tek veya daha fazla tanımlama yapmak istiyorsanız this.frm.control.patchValue kullanıyoruz örnekteki gibi  *5
// *6 form değerlerini sıfırlar
// *7 kısmında da formun diğer erişim metodları bulunmakta 










@Component({
  selector: 'app-template-driven-form',
  template: `
    <!-- *3 -->
    <form #frm="ngForm" (ngSubmit)="submit_func(frm.value)">
      <!-- *1  -->
      <input
        type="text"
        name="name"
        id=""
        #name="ngModel"
        placeholder="name"
        ngModel
      />
      <br />
      <input
        type="text"
        name="surname"
        placeholder="surname"
        id=""
        ngModel
      /><br />
      <input
        type="email"
        placeholder="email"
        name="email"
        id=""
        ngModel
      /><br />
      <input type="tel" placeholder="tel" name="tel" id="" ngModel /><br />
      <br />
      <!-- *2 -->
      <div ngModelGroup="address">
        <input type="text" placeholder="Semt" name="semt" id="" ngModel /><br />
        <input
          type="text"
          placeholder="Sehir"
          name="sehir"
          id=""
          ngModel
        /><br />
        <input type="text" placeholder="Ülke" name="ulke" id="" ngModel /><br />
      </div>

      <input type="submit" value="Kaydet" />
    </form>
  `,
})
export class TemplateDrivenFormComponent {
  //
  @ViewChild('frm', { static: true }) frm: NgForm;

  submit_func(data) {


//     // *4
//     this.frm.setValue({
//       name: 'ommer1453',
//       surname: '',
//       email: 'asdasd',
//       tel: 'asd',
//       address: { semt: 'assd', sehir: 'wfd', ulke: 'adas' },
//     });

// // *5
//     this.frm.control.patchValue({
//       name: 'deneme patch'
    
//     });

//     // *6
//     this.frm.reset();

//     console.log(data);

//     console.log(`Value : ${this.frm.value}`); //frm nesnesinin içindeki değerleri döndürür
//     console.log(`Valid : ${this.frm.valid}`); //frm nesnesinin value değerlerinin tamamımın validationlarının doğru olup olmadığını döndürür
//     console.log(`Touched : ${this.frm.touched}`); //form üzerinde hiç bir dokunma eylem değişiklik yapılıp yapılmadığı kontrolü yapılır
//     console.log(`Submitted : ${this.frm.submitted}`); //formun gönderlip gönderilmediğini döndürür
 
// // *7
// console.log(this.frm);
// console.log(this.frm.form);
// console.log(this.frm.control);

}
}
