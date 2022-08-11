import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NEXTJSComponent } from './nextjs.component';

describe('NEXTJSComponent', () => {
  let component: NEXTJSComponent;
  let fixture: ComponentFixture<NEXTJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NEXTJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NEXTJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
