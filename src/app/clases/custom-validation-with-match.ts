// kural-1453
// bu validation ile iki farklı field alanı karşılaştırıp (password confirm gibi) bize validate eden bir validation yazıyoruz
//burada onemli olan controllere ulaşabilmektir bunuda validationu controllere değil formgroup'a vermek ile oluyor  matchPaswordValidator validatıonu biz bu sefer iki formcontrol için oluşturduğumuz form group'a verdik ve bu sayede formControllerede abstractControlden oluşturduğımuz control değişkeninden ulaşabildik
//
//
// 1321
// calısmıyor izle tekrardan
////video 16 dk40


import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchPaswordValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const password: string = control.get('password').value;
    const password_confirm: string = control.get('password_confirm').value;

    if (password !== password_confirm) {

      return { nomatch: true };

    }

    return null ;

  };
}
