import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SASSComponent } from './sass.component';

describe('SASSComponent', () => {
  let component: SASSComponent;
  let fixture: ComponentFixture<SASSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SASSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SASSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
