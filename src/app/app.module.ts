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
    Video2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // kural-1453 two-way-data-binding için eklendi
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomPipe,

    // Dependency Injection için bu modüle eklendiler
    Product,
    ProductService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
