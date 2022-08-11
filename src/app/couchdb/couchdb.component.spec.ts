import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COUCHDBComponent } from './couchdb.component';

describe('COUCHDBComponent', () => {
  let component: COUCHDBComponent;
  let fixture: ComponentFixture<COUCHDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COUCHDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COUCHDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
