import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimenumbercheckerComponent } from './primenumberchecker.component';

describe('PrimenumbercheckerComponent', () => {
  let component: PrimenumbercheckerComponent;
  let fixture: ComponentFixture<PrimenumbercheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimenumbercheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimenumbercheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
