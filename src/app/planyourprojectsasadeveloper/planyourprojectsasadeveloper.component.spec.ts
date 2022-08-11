import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLANYOURPROJECTSASADEVELOPERComponent } from './planyourprojectsasadeveloper.component';

describe('PLANYOURPROJECTSASADEVELOPERComponent', () => {
  let component: PLANYOURPROJECTSASADEVELOPERComponent;
  let fixture: ComponentFixture<PLANYOURPROJECTSASADEVELOPERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PLANYOURPROJECTSASADEVELOPERComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PLANYOURPROJECTSASADEVELOPERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
