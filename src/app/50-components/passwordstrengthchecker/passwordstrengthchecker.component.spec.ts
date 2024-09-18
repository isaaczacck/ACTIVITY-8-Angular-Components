import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordstrengthcheckerComponent } from './passwordstrengthchecker.component';

describe('PasswordstrengthcheckerComponent', () => {
  let component: PasswordstrengthcheckerComponent;
  let fixture: ComponentFixture<PasswordstrengthcheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordstrengthcheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordstrengthcheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
