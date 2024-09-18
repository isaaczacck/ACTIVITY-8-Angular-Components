import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgecalculatorComponent } from './agecalculator.component';

describe('AgecalculatorComponent', () => {
  let component: AgecalculatorComponent;
  let fixture: ComponentFixture<AgecalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgecalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgecalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
