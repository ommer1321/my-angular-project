import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './example-product/create-product/create-product.component';
import { ReadProductComponent } from './example-product/read-product/read-product.component';
import { routes  as ommerCustomRoutes} from './routes/routes';// Bu bizim custom oluşturduğumuz route
import { CustomPreloadingStrategy } from './strategies/custom-preloading-strategy';

const routes: Routes = [
  // { path: 'Products', component: ReadProductComponent }, // Burada'da route tanımlayabiliriz
  // { path: 'Product/create', component: CreateProductComponent },
];

@NgModule({
  imports: [    
    RouterModule.forRoot(routes,{

      // *22
      preloadingStrategy:CustomPreloadingStrategy

      // preloadingStrategy:PreloadAllModules
      // preloadingStrategy:NoPreloading
    }),
    // RouterModule.forRoot(ommerCustomRoutes) // Bu bizim custom oluşturduğumuz route
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
