import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLOUDSTORAGEComponent } from './cloudstorage.component';

describe('CLOUDSTORAGEComponent', () => {
  let component: CLOUDSTORAGEComponent;
  let fixture: ComponentFixture<CLOUDSTORAGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CLOUDSTORAGEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CLOUDSTORAGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
