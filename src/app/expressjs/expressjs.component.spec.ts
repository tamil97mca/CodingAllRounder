import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EXPRESSJSComponent } from './expressjs.component';

describe('EXPRESSJSComponent', () => {
  let component: EXPRESSJSComponent;
  let fixture: ComponentFixture<EXPRESSJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EXPRESSJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EXPRESSJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
