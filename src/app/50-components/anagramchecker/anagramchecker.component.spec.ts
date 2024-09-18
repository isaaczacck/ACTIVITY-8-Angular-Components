import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagramcheckerComponent } from './anagramchecker.component';

describe('AnagramcheckerComponent', () => {
  let component: AnagramcheckerComponent;
  let fixture: ComponentFixture<AnagramcheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnagramcheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnagramcheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
