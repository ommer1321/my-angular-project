import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationSytaxComponent } from './interpolation-sytax.component';

describe('InterpolationSytaxComponent', () => {
  let component: InterpolationSytaxComponent;
  let fixture: ComponentFixture<InterpolationSytaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterpolationSytaxComponent]
    });
    fixture = TestBed.createComponent(InterpolationSytaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
