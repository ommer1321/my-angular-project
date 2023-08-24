import { Routes } from '@angular/router';
import { ReadProductComponent } from '../example-product/read-product/read-product.component';
import { CreateProductComponent } from '../example-product/create-product/create-product.component';
import { ErrorPageComponent } from '../errors/error-page/error-page.component';
//kural-1453
//  Bu bizim custom oluşturduğumuz routes sayfasıdır
//Biz bu sayfayı kullana bilmemiz için app.module.ts icindeki  imports: kısmına bu sayfayı tanımlamamız gerek şu şekilde => RouterModule.forRoot(routes) <= ve bunun içindeki routes'u da yani bunu sayfayıda sayfa içine import etmemiz lazım 
// 
// 
// *1 bizim default yönlendir me sayfası buradaki pathMatch aprametresi tamamen mi yoksa prefix olarak mı kulalanacağını belirler
// *2 bu bizim normal kullanmımız istediğimiz bir path belirliyoruz ve bu pette çalışacak componentide belirliyoruz
// *3 bubizim error page için kullandığımzı path ve biz bunu en sona koyarız url eşleşmezse hicbir sayfa ile bu calısır  //error-page.component.ts 
//
//
// Ayrıca biz oluşturduğumuz custom routes sayfasını  app-routing.module.ts içine import ederek de kullanabiliyoruz kullanımını görmek için app-routing.module.ts'e gidin
//
//<router-outlet></router-outlet> sayesinde route ile gittiğimiz componentleri cağırabiliyoruz
//

export const routes: Routes = [
  // *1
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // *2
  { path: 'products', component: ReadProductComponent },
  { path: 'product/create', component: CreateProductComponent },
  // *3
  { path: '**', component: ErrorPageComponent },
];
