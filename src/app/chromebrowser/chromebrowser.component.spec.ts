import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHROMEBROWSERComponent } from './chromebrowser.component';

describe('CHROMEBROWSERComponent', () => {
  let component: CHROMEBROWSERComponent;
  let fixture: ComponentFixture<CHROMEBROWSERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CHROMEBROWSERComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CHROMEBROWSERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
