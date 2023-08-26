import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterEventsComponent } from './router-events.component';

describe('RouterEventsComponent', () => {
  let component: RouterEventsComponent;
  let fixture: ComponentFixture<RouterEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterEventsComponent]
    });
    fixture = TestBed.createComponent(RouterEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
