import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WINDOWSSHORTCUTKEYSComponent } from './windowsshortcutkeys.component';

describe('WINDOWSSHORTCUTKEYSComponent', () => {
  let component: WINDOWSSHORTCUTKEYSComponent;
  let fixture: ComponentFixture<WINDOWSSHORTCUTKEYSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WINDOWSSHORTCUTKEYSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WINDOWSSHORTCUTKEYSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
