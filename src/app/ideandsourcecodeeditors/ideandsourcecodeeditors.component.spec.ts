import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDEANDSOURCECODEEDITORSComponent } from './ideandsourcecodeeditors.component';

describe('IDEANDSOURCECODEEDITORSComponent', () => {
  let component: IDEANDSOURCECODEEDITORSComponent;
  let fixture: ComponentFixture<IDEANDSOURCECODEEDITORSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IDEANDSOURCECODEEDITORSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IDEANDSOURCECODEEDITORSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
