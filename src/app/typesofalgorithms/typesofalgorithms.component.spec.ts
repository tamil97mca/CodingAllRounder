import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TYPESOFALGORITHMSComponent } from './typesofalgorithms.component';

describe('TYPESOFALGORITHMSComponent', () => {
  let component: TYPESOFALGORITHMSComponent;
  let fixture: ComponentFixture<TYPESOFALGORITHMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TYPESOFALGORITHMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TYPESOFALGORITHMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
