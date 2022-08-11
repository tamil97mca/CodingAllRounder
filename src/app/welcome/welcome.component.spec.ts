import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WELCOMEComponent } from './welcome.component';

describe('WELCOMEComponent', () => {
  let component: WELCOMEComponent;
  let fixture: ComponentFixture<WELCOMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WELCOMEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WELCOMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
