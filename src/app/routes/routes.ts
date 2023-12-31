import { Routes } from '@angular/router';
import { ReadProductComponent } from '../example-product/read-product/read-product.component';
import { CreateProductComponent } from '../example-product/create-product/create-product.component';
import { ErrorPageComponent } from '../errors/error-page/error-page.component';

import { ParentProductComponent } from '../parent-child/parent-product/parent-product.component';
import { ParentChild1Component } from '../parent-child/parent-child1/parent-child1.component';
import { ParentChild2Component } from '../parent-child/parent-child2/parent-child2.component';
import { ParentChild3Component } from '../parent-child/parent-child3/parent-child3.component';
import { ExampleCompComponent } from '../guards/example-comp/example-comp.component';
import { ExampleFailCompComponent } from '../guards/example-fail-comp/example-fail-comp.component';
import { canActivateGuard } from '../guards/can-activate.guard';
import { canActivateChildGuard } from '../guards/can-activate-child.guard';
import { canDeactivateGuard } from '../guards/can-deactivate.guard';
import { DataPassingComponent } from '../data-passing/data-passing.component';

// import { AddUserComponent } from '../example-modules/user-module/add-user/add-user.component';
// import { UpdateUserComponent } from '../example-modules/user-module/update-user/update-user.component';
// import { DeleteUserComponent } from '../example-modules/user-module/delete-user/delete-user.component';
// import { AddCategoryComponent } from '../example-modules/category-module/add-category/add-category.component';
// import { UpdateCategoryComponent } from '../example-modules/category-module/update-category/update-category.component';
// import { DeleteCategoryComponent } from '../example-modules/category-module/delete-category/delete-category.component';

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
//
// *4
// burada : ile parametre tanımladık ve angularda null ozelliği olmadığı için parametre gelmesi zorunlu olacaktır aksi takdirde o route içine ulaşamıyacaktır
//
//
// *5
// ilk olarak parent componentimizi tanılıyoruz ve onun altındaki childlar için 'children' ile yeni routelar tanımlıyoruz
// istersek redirect ile yönlendirmede yapabiliriz
// artık oluşturduysak routeları geri ParentProductComponent classının tanımlandığı  dosyaya gidebiliriz
//
//
//
//*6
// Modüler routes yapmak için  buradaki gibi lazy loader kullanıyoruz ve sadece bizim cağırdığımız component yükleniyor bu sayede
// normal şartlarda modüler oluşturulmadığı takdirde tüm routes yüklenir
//
// path içine altında listeleyeceğimiz ana route'u mesela burda 'user' yada 'category' yazıyoruz import içine modülümüzün yolunu tanımlıyoruz ve then içine importta eklediğimizi pathdeki modulelümüzün sınıfını ekliyoruz
//

// *8
// burada daha önce oluşturduğumuz lazy loaader modullerinin pathleri bulunmaktadır zaten bu işlemi yapabilmek için ilk olarak lazy loader yapmış olmamaız lazım  preloading yapacağımız modüllere 
//  lazy loader yaptıktan sonra her bir path için bir data passing parametresi oluşturuyoruz anlamlı olması için preload adında oluşturduk ve true veya false değer atadık 
// bu işlemi yaptıktan sonra geri geldiğiniz custom-preload-strategy sayfasına geri gidiniz
// => custom-preload-strategy sayfasına gidiniz
//

export const routes: Routes = [
  // *1
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // *2
  { path: '', component: ReadProductComponent },
  // *4
  { path: 'products/:id', component: ReadProductComponent },

  { path: 'product/create', component: CreateProductComponent },

  {
    path: 'data-passing',
    component: DataPassingComponent,
    data: { key1: 'ommer', key2: 1453 },
  },
  // *5
  {
    path: 'parent-product',
    component: ParentProductComponent,
    children: [
      {
        path: 'child-1/:id',
        component: ParentChild1Component,
        children: [
          // {path:"" , redirectTo:"child-3" , pathMatch:"full"},
          { path: 'child-2', component: ParentChild2Component },
          { path: 'child-3', component: ParentChild3Component },
        ],
      },
    ],
  },

  {
    path: 'guard-yes',
    component: ExampleCompComponent,
    canActivate: [canActivateGuard],
    canActivateChild: [canActivateChildGuard],
    canDeactivate: [canDeactivateGuard], //Bu Çalışmadı
    children: [{ path: 'guard-child', component: ParentChild3Component }],
  },
  { path: 'guard-no', component: ExampleFailCompComponent },

  //module path

  // { path: 'user/add', component: AddUserComponent },
  // { path: 'user/update', component: UpdateUserComponent },
  // { path: 'user/delete', component: DeleteUserComponent },

  // { path: 'category/add', component: AddCategoryComponent },
  // { path: 'category/update', component: UpdateCategoryComponent },
  // { path: 'category/delete', component: DeleteCategoryComponent },

  // -----------

  // *6
  {
    path: 'user',
    loadChildren: () =>
      import('../example-modules/user-module/user-module.module').then(
        (m) => m.UserModuleModule
      ),
      // *8
    data: { preload: true },
  },
  {
    path: 'category',
    loadChildren: () =>
      import('../example-modules/category-module/category-module.module').then(
        (m) => m.CategoryModuleModule
      ),
      // *8
    data: { preload: false },
  },

  //

  // *3
  { path: '**', component: ErrorPageComponent },
];
