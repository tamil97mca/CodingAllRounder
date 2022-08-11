import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GITHUBANDGITLABComponent } from './githubandgitlab.component';

describe('GITHUBANDGITLABComponent', () => {
  let component: GITHUBANDGITLABComponent;
  let fixture: ComponentFixture<GITHUBANDGITLABComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GITHUBANDGITLABComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GITHUBANDGITLABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
