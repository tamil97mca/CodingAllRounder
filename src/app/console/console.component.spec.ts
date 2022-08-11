import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONSOLEComponent } from './console.component';

describe('CONSOLEComponent', () => {
  let component: CONSOLEComponent;
  let fixture: ComponentFixture<CONSOLEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CONSOLEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CONSOLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
