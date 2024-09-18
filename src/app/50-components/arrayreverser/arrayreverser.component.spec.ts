import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayreverserComponent } from './arrayreverser.component';

describe('ArrayreverserComponent', () => {
  let component: ArrayreverserComponent;
  let fixture: ComponentFixture<ArrayreverserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayreverserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayreverserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
