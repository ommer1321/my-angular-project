import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minFiveLetterValidator } from 'src/app/clases/custom-validation';
import { matchPaswordValidator } from 'src/app/clases/custom-validation-with-match';
import { maxLetterCounterValidator } from 'src/app/clases/custom-validation-with-parameters';
// kural-1453
// ilk olarak form oluşturuyoruz ve formu formda formGrup sınıfından oluşturuyoruz
// daha sonra formcontrolname ile input değperlerini belirliyoruz 
// daha sonra formdan veri alabilmek için il formGruop sınıfndan bir nesne oluşturuyoruz frm adında 
// daha sonra constructor oluşturuyoruz ve formBuilder sınıfndan oluşturuyoruz bunu formbuilder adında  
// dah sonra constructıor içinde bu form builder nesnesini çağırıp group metodu içinde fieldları yani inputları oluşturuyoruz ve bunu frm nesnesine atıyoruz
// daha sonra oluşturduğumuz fieldlar içinde validation tanımlamaları yapıyoruz 
// daha sonra bu fieldları *1 örneği gibi  property oluşturuyoruz template de erişebilmek için
// daha sonra template içinde if directive'i ile şart koşarak örnekteki  *2 gibi ekrana basıyoruz eğer validation şartlara uymuyor ise ekranda gözüküyor
// 
// setValidators *3 sayesinde biz var olan validation kurallarının üzerine yeni bir validation kuralları yazabiliyoruz ve eski kurallar tamamı kalkıyor ama işlemin gerçekleşmesi için ilgili validasyonun yapıldığı input vb tekrar tetiklenmesi gerek bunun içinde bi updateValueAndValidity() methodu ile bunu yapıyoruz ayrıca clearValidators() sayesinde var olan validationları kaldırabiliyoruz 
// 
// clases/custom-validation.ts 'e git (minFiveLetterValidator)
//  
// clases/custom-validation-with-parameters.ts 'e git (maxLetterCounterValidator(10))
//





@Component({
  selector: 'app-built-in-validations',
  template: `
    <form [formGroup]="frm" (submit)="submit_click()" >

      <input type="text" name="" placeholder="name" formControlName="name" id="" /><br />
      <!-- *2 -->
      <span *ngIf="!name.valid && (name.dirty || name.touched)">{{name.errors | json}}</span>
<br><br />
      <input type="text" name="" placeholder="surname" formControlName="surname" id="" /><br />

      <div formGroupName="security">

        <input type="text" name="" placeholder="password" formControlName="password" id="" /><br />
      
        <input type="text" name="" placeholder="password_confirm" formControlName="password_confirm" id="" /><br />
      </div>
      <span *ngIf="!security.valid && (security.get('password').dirty || security.get('password').touched)" >{{security.get('password').errors   | json}}</span>
      <span *ngIf="!security.valid && (security.get('password_confirm').dirty || security.get('password_confirm').touched)" >{{security.get('password_confirm').errors   | json}}</span>

     <!-- {{security.get('password').value}} -->

      <span *ngIf="!surname.valid && (surname.dirty || surname.touched)" >{{surname.errors   | json}}</span>
<br>
<br />

      <input type="submit" value="Kaydet" />
    </form>
    <button (click)="set_validator_func()">Name İnputunun validationunu güncelle</button>


  `,
})
export class BuiltInValidationsComponent {
  frm:FormGroup;


  constructor(private formBuilder:FormBuilder){
this.frm = formBuilder.group({
  name:["",[Validators.required,Validators.minLength(3), minFiveLetterValidator , maxLetterCounterValidator(10)]],
  surname:["",Validators.required],

  security: formBuilder.group({
    password:['',Validators.required],
    password_confirm:['',Validators.required],


  },matchPaswordValidator)


});


  }

  // *1
  // bunlar property template de erişebilmek için oluşturuyoruz
  get name(){
  return this.frm.get('name');
  }
    
  
  get surname(){
    return this.frm.get('surname');
    }
    
  get password(){
      return this.frm.get('password');
      }
        
  get password_confirm(){
        return this.frm.get('password_confirm');
        }
        get security(){
          return this.frm.get('security');
          }
          
        



  submit_click(){
    // console.log(this.frm.get('name').valid);
    
    // console.log(this.frm.get('name').valid);
    console.log(this.frm.valid);
    


  }
  set_validator_func(){
    // *3
this.frm.get('name').setValidators([Validators.required])

// this.frm.get('name').clearValidators();

this.frm.get('name').updateValueAndValidity();
  }
}
