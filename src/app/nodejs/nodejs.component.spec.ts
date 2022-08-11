import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NODEJSComponent } from './nodejs.component';

describe('NODEJSComponent', () => {
  let component: NODEJSComponent;
  let fixture: ComponentFixture<NODEJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NODEJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NODEJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
