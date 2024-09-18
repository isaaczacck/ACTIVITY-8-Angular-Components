import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeselectorComponent } from './shapeselector.component';

describe('ShapeselectorComponent', () => {
  let component: ShapeselectorComponent;
  let fixture: ComponentFixture<ShapeselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapeselectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
