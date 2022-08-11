import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BOOTSTRAPComponent } from './bootstrap.component';

describe('BOOTSTRAPComponent', () => {
  let component: BOOTSTRAPComponent;
  let fixture: ComponentFixture<BOOTSTRAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BOOTSTRAPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BOOTSTRAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
