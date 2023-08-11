import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { PropertyBinding2Component } from './property-binding2/property-binding2.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule } from '@angular/forms';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { InterpolationSytaxComponent } from './interpolation-sytax/interpolation-sytax.component';
import { DirectiveComponent } from './directive/directive.component';

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
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // kural-1453 two-way-data-binding için eklendi
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
