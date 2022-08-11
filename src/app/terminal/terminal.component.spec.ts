import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TERMINALComponent } from './terminal.component';

describe('TERMINALComponent', () => {
  let component: TERMINALComponent;
  let fixture: ComponentFixture<TERMINALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TERMINALComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TERMINALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
