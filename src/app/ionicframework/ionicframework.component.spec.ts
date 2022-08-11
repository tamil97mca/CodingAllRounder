import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IONICFRAMEWORKComponent } from './ionicframework.component';

describe('IONICFRAMEWORKComponent', () => {
  let component: IONICFRAMEWORKComponent;
  let fixture: ComponentFixture<IONICFRAMEWORKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IONICFRAMEWORKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IONICFRAMEWORKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
