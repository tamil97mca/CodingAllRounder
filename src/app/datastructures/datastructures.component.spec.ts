import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DATASTRUCTURESComponent } from './datastructures.component';

describe('DATASTRUCTURESComponent', () => {
  let component: DATASTRUCTURESComponent;
  let fixture: ComponentFixture<DATASTRUCTURESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DATASTRUCTURESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DATASTRUCTURESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
