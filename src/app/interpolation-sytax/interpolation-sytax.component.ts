import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-sytax',

  // template referansı ile bir html nesnesi ile bağlantı kurup değerini alabiliyoruz *1
  // 2 değer ile işlemler yapabiliyoruz *2
  //  ngNonBindable ile buluduğu html nesnesindeki tüm şnterpolation'ları pasife cekerek dönüştürmeden gösterir {{deneme}} gibi *3
  // pipes ile interpolationlara müdahale edebildiğimiz fonksiyonları sağlar {{pipes | uppercase}}   örnek kullanımı *4
  // ? sayesinde nullable bırakabiliyoruz interpol içerisinde  ? fakat ben hata aldım *5
  // ? sayesinde hic kontrol ettirmeden devam ediyor kodu okumaya !  *6

  template: `
    <!-- *1 -->
    <input type="text" #txt value="123" />
    {{ txt.value }}
    <br />
    <!-- *2 -->
    {{ n1 * n2 }}

    <!-- *3 -->
    <h1 ngNonBindable>{{ deneme }}</h1>

    <!-- *4 -->
    <h2>{{ pipes | uppercase }}</h2>
    <!-- *5 -->
    <!-- <h3>{{ val? }}</h3> -->
    <h3>{{ val }}</h3>

    <!-- *6 -->
    <h3>{{ val! }}</h3>


  `,

  styleUrls: ['./interpolation-sytax.component.scss'],
})
export class InterpolationSytaxComponent {
  n1: number = 31;
  n2: number = 31;
  deneme: string = 'bu yazı sytax olarak gözükücek ngNonBindable sayesinde';
  pipes: string = 'bu cumlenin baş harfleri büyüyücek';
  val: number = 123;
}
