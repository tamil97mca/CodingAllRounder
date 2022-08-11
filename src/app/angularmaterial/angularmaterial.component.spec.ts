import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ANGULARMATERIALComponent } from './angularmaterial.component';

describe('ANGULARMATERIALComponent', () => {
  let component: ANGULARMATERIALComponent;
  let fixture: ComponentFixture<ANGULARMATERIALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ANGULARMATERIALComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ANGULARMATERIALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
