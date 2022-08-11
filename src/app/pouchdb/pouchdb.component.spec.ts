import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POUCHDBComponent } from './pouchdb.component';

describe('POUCHDBComponent', () => {
  let component: POUCHDBComponent;
  let fixture: ComponentFixture<POUCHDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POUCHDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(POUCHDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
