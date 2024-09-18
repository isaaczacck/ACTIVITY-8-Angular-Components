import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VowelcounterComponent } from './vowelcounter.component';

describe('VowelcounterComponent', () => {
  let component: VowelcounterComponent;
  let fixture: ComponentFixture<VowelcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VowelcounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VowelcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
