import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// kural-1453
// öncelikle bir class oluşturuyoruz daha sonra aşağıdaki gibi bir function oluşturuyoruz
// bu function'a bir parametre ekliyoruz ve ValidatorFn türünde bir döndürme yapmak için ValidatorFn ekliyoruz (fonksiyon imzası barındırıyor bundan kaynaklı ekliyoruz)
// daha sonra return içine bir fonksiyon yazıyoruz ve bu fonksiyon bize parametresiz fonksiyonda yaptığı işlemlerin aynısını yapıyor 
//  
// Chat Gpt
// 
// import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'; satırı, Angular form doğrulama özelliklerini kullanmak için gerekli olan modülleri içeri aktarır.
// maxLetterCounterValidator adlı bir fonksiyon tanımlanır. Bu fonksiyon, bir sayı (count) alır ve ValidatorFn türünde bir işlev döndürür. ValidatorFn, form kontrolünün geçerliliğini denetlemek için kullanılan bir türdür.
// Dönen işlev, aslında bir başka anonim ok işlevidir. Bu işlev, form kontrolünün değerini alır.
// Eğer form kontrolünün değeri belirli bir sayıdan fazla karakter içeriyorsa, bir doğrulama hatası nesnesi döndürülür (maxLetterCounterValidator: true).
// Eğer metin uzunluğu sınıra uymuyorsa, null döndürülür, yani herhangi bir doğrulama hatası olmadığı anlamına gelir.
// 





export function maxLetterCounterValidator( count : number):ValidatorFn {
    
    
    return (control : AbstractControl) : ValidationErrors | null => {
         const value= control.value;


        if (value.length > count) {
            return { maxLetterCounterValidator: true };
          }
        
          return null;


    }
}
