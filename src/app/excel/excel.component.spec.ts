import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EXCELComponent } from './excel.component';

describe('EXCELComponent', () => {
  let component: EXCELComponent;
  let fixture: ComponentFixture<EXCELComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EXCELComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EXCELComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
