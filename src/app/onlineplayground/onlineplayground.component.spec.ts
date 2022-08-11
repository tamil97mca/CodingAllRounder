import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONLINEPLAYGROUNDComponent } from './onlineplayground.component';

describe('ONLINEPLAYGROUNDComponent', () => {
  let component: ONLINEPLAYGROUNDComponent;
  let fixture: ComponentFixture<ONLINEPLAYGROUNDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ONLINEPLAYGROUNDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ONLINEPLAYGROUNDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
