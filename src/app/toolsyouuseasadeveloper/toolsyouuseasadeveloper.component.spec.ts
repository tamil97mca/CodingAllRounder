import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TOOLSYOUUSEASADEVELOPERComponent } from './toolsyouuseasadeveloper.component';

describe('TOOLSYOUUSEASADEVELOPERComponent', () => {
  let component: TOOLSYOUUSEASADEVELOPERComponent;
  let fixture: ComponentFixture<TOOLSYOUUSEASADEVELOPERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TOOLSYOUUSEASADEVELOPERComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TOOLSYOUUSEASADEVELOPERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
