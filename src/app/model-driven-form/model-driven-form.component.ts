import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// kural-1453
// ilk başta FormsModule ve ReactiveFormsModule sınıflarını bu componentin tanımlandığı modül sayfasıan import ediyoruz daha sonra bu sayfaya kabul ediyoruz
// sonra form oluşturuyoruz  *1 [formGroup]="frm" şeklindeki gibi forma tanımlama yapıyoruz ve aynı oluşturduğumuz isimde bir Form Group nesnesi oluşturuyoruz *2 içine
// daha sonra inputları oluşturdukdan sonra her input için değerini yakalayabilmemiz için formControlName="name" şeklinde bir tanılama yapıyoruz
//  daha sonra constructor metodu oluşturup *4 içine private formBuilder: FormBuilder nesnesi oluşturuyoruz ve form da tanımladığımız formControlName verilerini burda bind edip frm sınıfından oluşturduğumuz nesnenin içne atıyoruz
// başka bir form gruop *5 oluşturmak için  inputları bir div içine alıp daha sonra o dive  formGroupName="address" şeklide bir isim atıyoruz ve form Builder *5  içinde yeni bir formBuilder.group oluşturarak içine input değerleri ile beraber atıoruz
// form validationları için validator *8 kullanıyoruz ve frm.valid örneği gibi formun valid olup olmaamsı gibi kontroller sağlayabilityoruz
//only *9 self özlliği ile bir değer atadığımızda eğer onlyself özelliği true ise bu değer validation kurallarınını etkilemeyecektir  mesela *10 daki butona atanmış fonksiyonu çalıştırdığımızda name alanını dolduruyor ama yinede true olmuyor validation
// *11 statusChanges valueChanges metodları sayesinde value için yapılan  her değişikliği yakalıyoruz bunu  observer sayesinde yapıyor 
//
//




@Component({
  selector: 'app-model-driven-form',
  template: `
    <!-- *1 -->
    <form [formGroup]="frm" (ngSubmit)="submit_click(frm.value)">
      <!-- *3  -->
      <input type="text" placeholder="Name" formControlName="name" /> <br />
      <input
        type="text"
        placeholder="Surname"
        formControlName="surname"
      /><br />
      <input type="text" placeholder="email" formControlName="email" /><br />
      <input type="text" placeholder="tel" formControlName="tel" /><br />

      <div formGroupName="address">
        <input type="text" placeholder="ulke" formControlName="ulke" /><br />
        <input type="text" placeholder="sehir" formControlName="sehir" /><br />
        <input type="text" placeholder="semt" formControlName="semt" /><br />
      </div>

      <br />
      <input type="submit" value="Kaydet" />
    </form>
    {{ frm.valid }}

    <!-- *10 -->
    <input type="button" (click)="deneme_btn()" value="" />
  `,
})
export class ModelDrivenFormComponent {
  // *2
  frm: FormGroup;

  // *4
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ['default değer böyle verilir', Validators.required],
      //  *8
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      tel: [''],
      // *5
      address: formBuilder.group({
        ulke: [''],
        sehir: [''],
        semt: [''],
      }),
    });




    // *11
    this.frm.get('name').statusChanges.subscribe({
      next: (data) => {
        console.log(data);
      },
    });


    this.frm.get('name').valueChanges.subscribe({
      next: (data) => {
        console.log(data);
      },
    });


  }

  submit_click(value) {
    if (this.frm.valid) {
      console.log(value);
    } else {
      console.log('form valid değil');
    }
  }

  deneme_btn() {
    //  *9
    this.frm.get('name').setValue('asdassfa', { onlySelf: true });
  }

  ngOnInit(): void {}
}
