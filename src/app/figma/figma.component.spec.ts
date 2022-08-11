import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FIGMAComponent } from './figma.component';

describe('FIGMAComponent', () => {
  let component: FIGMAComponent;
  let fixture: ComponentFixture<FIGMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FIGMAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FIGMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
