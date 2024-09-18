import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplestopwatchComponent } from './simplestopwatch.component';

describe('SimplestopwatchComponent', () => {
  let component: SimplestopwatchComponent;
  let fixture: ComponentFixture<SimplestopwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplestopwatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplestopwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
