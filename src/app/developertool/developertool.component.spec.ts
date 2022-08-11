import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DEVELOPERTOOLComponent } from './developertool.component';

describe('DEVELOPERTOOLComponent', () => {
  let component: DEVELOPERTOOLComponent;
  let fixture: ComponentFixture<DEVELOPERTOOLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DEVELOPERTOOLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DEVELOPERTOOLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
