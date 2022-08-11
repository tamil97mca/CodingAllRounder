import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPANDHTTPSComponent } from './httpandhttps.component';

describe('HTTPANDHTTPSComponent', () => {
  let component: HTTPANDHTTPSComponent;
  let fixture: ComponentFixture<HTTPANDHTTPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTTPANDHTTPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HTTPANDHTTPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
