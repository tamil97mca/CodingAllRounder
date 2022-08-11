import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VSCODEANDEXTENSIONSComponent } from './vscodeandextensions.component';

describe('VSCODEANDEXTENSIONSComponent', () => {
  let component: VSCODEANDEXTENSIONSComponent;
  let fixture: ComponentFixture<VSCODEANDEXTENSIONSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VSCODEANDEXTENSIONSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VSCODEANDEXTENSIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
