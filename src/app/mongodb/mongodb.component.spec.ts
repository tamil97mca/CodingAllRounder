import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MONGODBComponent } from './mongodb.component';

describe('MONGODBComponent', () => {
  let component: MONGODBComponent;
  let fixture: ComponentFixture<MONGODBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MONGODBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MONGODBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
