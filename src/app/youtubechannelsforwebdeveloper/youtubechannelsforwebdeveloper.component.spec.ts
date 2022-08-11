import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YOUTUBECHANNELSFORWEBDEVELOPERComponent } from './youtubechannelsforwebdeveloper.component';

describe('YOUTUBECHANNELSFORWEBDEVELOPERComponent', () => {
  let component: YOUTUBECHANNELSFORWEBDEVELOPERComponent;
  let fixture: ComponentFixture<YOUTUBECHANNELSFORWEBDEVELOPERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YOUTUBECHANNELSFORWEBDEVELOPERComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YOUTUBECHANNELSFORWEBDEVELOPERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
