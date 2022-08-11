import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ANGULARComponent } from './angular.component';

describe('ANGULARComponent', () => {
  let component: ANGULARComponent;
  let fixture: ComponentFixture<ANGULARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ANGULARComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ANGULARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
