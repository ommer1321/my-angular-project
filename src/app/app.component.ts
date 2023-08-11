import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-home></app-home>

    <app-property-binding></app-property-binding>

    <app-property-binding2 [deneme]="property_binding_2"></app-property-binding2>

    <app-event-binding></app-event-binding>

    <app-two-way-data-binding></app-two-way-data-binding>
    
    <app-attribute-binding></app-attribute-binding>
    
    <app-interpolation-sytax></app-interpolation-sytax>
    
    <app-directive></app-directive>

    
    
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-angular-project';
  property_binding_2 = 'property-binding-2 input örneği';
  
}
