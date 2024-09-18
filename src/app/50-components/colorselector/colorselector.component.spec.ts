import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorselectorComponent } from './colorselector.component';

describe('ColorselectorComponent', () => {
  let component: ColorselectorComponent;
  let fixture: ComponentFixture<ColorselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorselectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
