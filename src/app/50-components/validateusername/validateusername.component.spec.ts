import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateusernameComponent } from './validateusername.component';

describe('ValidateusernameComponent', () => {
  let component: ValidateusernameComponent;
  let fixture: ComponentFixture<ValidateusernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateusernameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateusernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
