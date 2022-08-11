import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SOCKETIOComponent } from './socketio.component';

describe('SOCKETIOComponent', () => {
  let component: SOCKETIOComponent;
  let fixture: ComponentFixture<SOCKETIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SOCKETIOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SOCKETIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
