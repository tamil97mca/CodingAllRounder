import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FILEEXTENSIONSComponent } from './fileextensions.component';

describe('FILEEXTENSIONSComponent', () => {
  let component: FILEEXTENSIONSComponent;
  let fixture: ComponentFixture<FILEEXTENSIONSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FILEEXTENSIONSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FILEEXTENSIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
