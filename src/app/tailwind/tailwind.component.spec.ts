import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAILWINDComponent } from './tailwind.component';

describe('TAILWINDComponent', () => {
  let component: TAILWINDComponent;
  let fixture: ComponentFixture<TAILWINDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TAILWINDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TAILWINDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
