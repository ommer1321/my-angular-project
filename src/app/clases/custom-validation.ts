import { AbstractControl, ValidationErrors } from '@angular/forms';

// kural-1453
// minFiveLetterValidator burada bir custom parametresiz bir validation oluşturduk 
// ilk olarak class oluşturuyoruz 
// daha sonra bir function ouşturuyoruz ve  AbstractControl sınıfından bir değişken referans ediyoruz (control: AbstractControl) 
// daha sonra return olarak ValidationErrors türünden nesne yada null dönen bir function (ValidationErrors | null)    
// daha sonra controldan aldığımız veriyi bir değişkene atıyoruz ve işlemler validation methodumuzu oluşturuyoruz 
// ve sonunda  return edip durumu kullanacağımız sayfada ilk olarak import edip sonra kullanıyoruz 
// import { minFiveLetterValidator } from 'src/app/clases/custom-validation';
// 
// örn :
// 
//   constructor(private formBuilder:FormBuilder){
// this.frm = formBuilder.group({
//     name:["",[Validators.required,Validators.minLength(3), minFiveLetterValidator]],
//     surname:["",Validators.required]
  
//   });
// 
// 
// 


// *1
export function minFiveLetterValidator(  control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (value.length <= 5) {
    return { minFiveLetterValidator: true };
  }

  return null;
}
