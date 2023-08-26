import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { RouterModule } from '@angular/router';

// kural-1453



//**** */ routes.ts dosyasında (ana route içinde ) işleniyor bu olaylar//****

// Modüler routes yapmak için  buradaki gibi lazy loader kullanıyoruz ve sadece bizim cağırdığımız component yükleniyor bu sayede 
// normal şartlarda modüler oluşturulmadığı takdirde tüm routes yüklenir  
// 
// path içine altında listeleyeceğimiz ana route'u mesela burda 'user' yada 'category' yazıyoruz import içine modülümüzün yolunu tanımlıyoruz ve then içine importta eklediğimizi pathdeki modulelümüzün sınıfını ekliyoruz
//
////****

// *1
// RouterModule sınıfının forChild metodu ile routelarımızı tanımlıyoruz ana modülde de  forRoot ile tanımlama yaparız biri ana route diğerleri alt routelar için aslında
// burada yeni oluşturduğumuz modül üzerinden route tanımlamalarımızı yapıyoruz ve burada ana route tanımlamamızda belirttiğimiz prefix altında tanımladığımızı unutmuyoruz
//  
//  RouterModule'u app.module içinde export etmeyi unutmuyoruyz cunkü component vs bunları başka yerde kullanmak için import ettikten sonra export etmemiz lazım
// 
// 
// 
// 
// 
// 
// 



@NgModule({
  declarations: [
    DeleteCategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
  ],
  imports: [
    CommonModule,
    // *1
    RouterModule.forChild([
      { path: 'add', component: AddCategoryComponent },
      { path: 'update', component: UpdateCategoryComponent },
      { path: 'delete', component: DeleteCategoryComponent },
    ]),
  ],
})
export class CategoryModuleModule {}
