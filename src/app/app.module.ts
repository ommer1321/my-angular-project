import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { PropertyBinding2Component } from './property-binding2/property-binding2.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { InterpolationSytaxComponent } from './interpolation-sytax/interpolation-sytax.component';
import { DirectiveComponent } from './directive/directive.component';
import { ExampleDirective } from './directives/example.directive';
import { CustomForDirective } from './directives/custom-for.directive';
import { CustomIfDirective } from './directives/custom-if.directive';
import { CustomPipe } from './Pipes/custom.pipe';
import { Child1Component } from './components/child_to_parent/child1/child1.component';
import { Parent1Component } from './components/parent_to_child/parent1/parent1.component';
import { Ch1Component } from './components/child_to_child/ch1/ch1.component';
import { Ch2Component } from './components/child_to_child/ch2/ch2.component';
import { PrComponent } from './components/child_to_child/pr/pr.component';
import { ComponentLifeCycleHooksComponent } from './component-life-cycle-hooks/component-life-cycle-hooks.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { BuiltInValidationsComponent } from './validations/built-in-validations/built-in-validations.component';
import { Video1Component } from './Dependency_Injection/video1/video1.component';
import { Product } from './Dependency_Injection/product';
import { ProductService } from './Dependency_Injection/product-service';
import { Video2Component } from './Dependency_Injection/video2/video2.component';
import { A, B, C, LoggerService } from './example-classes/logger-service';
import { Video3Component } from './Dependency_Injection/video3/video3.component';
import { logServiceIT } from './injection-token';
import { HttpClientModule } from '@angular/common/http'; // HttpClientModule'ı import ediyoruz
import { HttpClient } from '@angular/common/http';
import { SelfDecoratorComponent } from './decorators/self-decorator/self-decorator.component';
import { Comp1Component } from './decorators/comp1/comp1.component';
import { Comp2Component } from './decorators/comp2/comp2.component';
import { Comp3Component } from './decorators/comp3/comp3.component';
import { CreateProductComponent } from './example-product/create-product/create-product.component';
import { ReadProductComponent } from './example-product/read-product/read-product.component'; // HttpClient'ı import ediyoruz
import { RouterModule } from '@angular/router';
import { routes } from './routes/routes';// Bu bizim custom oluşturduğumuz route
import { ErrorPageComponent } from './errors/error-page/error-page.component' // Bu bizim custom oluşturduğumuz errorPage Sayfası 
import { APP_BASE_HREF } from '@angular/common';
import { ParentProductComponent } from './parent-child/parent-product/parent-product.component';
import { ParentChild1Component } from './parent-child/parent-child1/parent-child1.component';
import { ParentChild2Component } from './parent-child/parent-child2/parent-child2.component';
import { ParentChild3Component } from './parent-child/parent-child3/parent-child3.component';
import { QueryStringComponent } from './query-string/query-string.component';
import { ExampleCompComponent } from './guards/example-comp/example-comp.component';
import { ExampleFailCompComponent } from './guards/example-fail-comp/example-fail-comp.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertyBindingComponent,
    PropertyBinding2Component,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    AttributeBindingComponent,
    InterpolationSytaxComponent,
    DirectiveComponent,
    ExampleDirective,
    CustomForDirective,
    CustomIfDirective,
    CustomPipe,
    Child1Component,
    Parent1Component,
    Ch1Component,
    Ch2Component,
    PrComponent,
    ComponentLifeCycleHooksComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,
    BuiltInValidationsComponent,
    Video1Component,
    Video2Component,
    Video3Component,
    SelfDecoratorComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    CreateProductComponent,
    ReadProductComponent,
    ErrorPageComponent,
    ParentProductComponent,
    ParentChild1Component,
    ParentChild2Component,
    ParentChild3Component,
    QueryStringComponent,
    ExampleCompComponent,
    ExampleFailCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), // Bu bizim custom oluşturduğumuz route | {useHash:true} ile urlde # ile çaışıyor program
    // HttpClient için eklendi
    HttpClientModule,
    // kural-1453 two-way-data-binding için eklendi
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [

    CustomPipe,
    // Comp1Component,
  

    // Dependency Injection için bu modüle eklendiler
    Product,
    ProductService,

    //***DI Tanımlama Şekilleri
    // LoggerService  //DI Token - Default Type Token
    // {provide:LoggerService,useClass:LoggerService} // Type Token ( Bu şekilde tanımlamada ilk parametre provide ettiğimiz sınıftan ilk yaptığımız şekildeki gibi referans alarak kullanılıyor ikinci parametrede provide edilmek istenen sınıf  )
    // {provide:'ommer1453',useClass:LoggerService} // String Token
    { provide: logServiceIT, useClass: LoggerService }, //Injection  Token (injection-token.ts sayfasında toplu olarak tanımlarız)

    // ***Provider Türleri

    // {provide:Product,useClass:Product} // Sınıf Provider'ı
    // {provide:'URL',useValue:'www.asyazilim.online'} // Metinsel Provider'ı (useValue direk fonksiyonu veya veeriyi getirir result'u getirmez işlemi ilgili sayfada yapar)
    // {provide:'URL',useValue:()=>{let a:number = 1453; return 'www.asyazilim.online'+a;}}  // Fonksiyon Provider'ı (useValue direk fonksiyonu veya veeriyi getirir result'u getirmez işlemi ilgili sayfada yapar)

    // kural-1453
    // Şimdi burda provide tanımladıktan sonra useFactory içine fonksiyon tanımlıyoruz veiçinde istediğimiz hertürlü fonksiyonel parametrik herşeyi gerçekleştirebiliyoruz
    // aynı zamanda deps ile dependicy'leri tanımlayabiliyoruz (yani parametrelerimizi) ve return olarak inject etmek istediğimiz sınıfı dönüyoruz yada dönmesek sadece işlem gerçekleştirsekte olur
    //
    //
    // {
    //   provide: "useFactory_provider", //Factory Provider'ı
    //   useFactory: (httpClient: HttpClient) => {
    //     const api_data = httpClient
    //       .get("https://jsonplaceholder.org/users")
    //       .subscribe({ next: (data) => console.log(data) });
    //       return new LoggerService();
    //   },
    //   deps: [HttpClient],
    // },
    // *********
    //  A,
    //  {provide:B,useClass:A},
    //  {provide:C,useExisting:B} //Aliased Class Provider

    // kural-1453
    // {provide:APP_BASE_HREF,useValue:'ommer1453'}, //Bunun sayesinde uygulamaya prefix verebiliyoruz


  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
