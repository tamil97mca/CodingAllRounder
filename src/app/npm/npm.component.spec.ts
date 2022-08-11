import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NPMComponent } from './npm.component';

describe('NPMComponent', () => {
  let component: NPMComponent;
  let fixture: ComponentFixture<NPMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NPMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
