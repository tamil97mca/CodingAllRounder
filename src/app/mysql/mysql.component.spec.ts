import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MYSQLComponent } from './mysql.component';

describe('MYSQLComponent', () => {
  let component: MYSQLComponent;
  let fixture: ComponentFixture<MYSQLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MYSQLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MYSQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
