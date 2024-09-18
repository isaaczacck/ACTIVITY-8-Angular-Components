import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeapyearcheckerComponent } from './leapyearchecker.component';

describe('LeapyearcheckerComponent', () => {
  let component: LeapyearcheckerComponent;
  let fixture: ComponentFixture<LeapyearcheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeapyearcheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeapyearcheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
