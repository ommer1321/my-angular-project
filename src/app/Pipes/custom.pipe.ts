import { Pipe, PipeTransform } from '@angular/core';

// kural-1453
//  PipeTransform sınıfını implement ederek  interface alıyoruz
// transform methodu ile verinin kendisine dokunmadan sadece makyaj yapıp geri return ediyoruz 
// transform methodunun 1. parametresi alacağımız değerin kendisi ve türüdür any , unknown , string , number ... istediğimiz şekilde değer verebiliriz ,
//   transform methodunun 2. parametresi bu ilk değer için alacağımız parametrelerdir ister opsiyonel ister zorunlu birden cok parametre sağlaya biliriz
//  transform methodunun 3. parametresi 3. parametrede return türüdür ve veriyi ne türde döndürmek istediğimizi belirleriz 
// app.module.ts icerisindeki provide kısmına Pipe'ın class ismini girersek bu Pipe artık class olarak da kullanılabilir hale gelir örnek olarak CustomPipe  
  // constructor(private customPipe : CustomPipe){
  //   console.log(  customPipe.transform(10,3))
  //   }


@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
// *1
  transform(value: number, a?:number): number {
    if(a){
      value = value*a;
    } 
    return value;
  }

}
