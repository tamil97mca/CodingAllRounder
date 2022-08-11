import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LESSComponent } from './less.component';

describe('LESSComponent', () => {
  let component: LESSComponent;
  let fixture: ComponentFixture<LESSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LESSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LESSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
