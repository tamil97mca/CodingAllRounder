import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POSTGRESQLComponent } from './postgresql.component';

describe('POSTGRESQLComponent', () => {
  let component: POSTGRESQLComponent;
  let fixture: ComponentFixture<POSTGRESQLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POSTGRESQLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(POSTGRESQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
