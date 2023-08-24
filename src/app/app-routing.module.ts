import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './example-product/create-product/create-product.component';
import { ReadProductComponent } from './example-product/read-product/read-product.component';
import { routes  as ommerCustomRoutes} from './routes/routes';// Bu bizim custom oluşturduğumuz route

const routes: Routes = [
  // { path: 'Products', component: ReadProductComponent }, // Burada'da route tanımlayabiliriz
  // { path: 'Product/create', component: CreateProductComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // RouterModule.forRoot(ommerCustomRoutes) // Bu bizim custom oluşturduğumuz route
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
