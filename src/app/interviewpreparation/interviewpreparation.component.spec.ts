import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INTERVIEWPREPARATIONComponent } from './interviewpreparation.component';

describe('INTERVIEWPREPARATIONComponent', () => {
  let component: INTERVIEWPREPARATIONComponent;
  let fixture: ComponentFixture<INTERVIEWPREPARATIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ INTERVIEWPREPARATIONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(INTERVIEWPREPARATIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
