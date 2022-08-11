import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TYPESOFERRORINPROGRAMMINGComponent } from './typesoferrorinprogramming.component';

describe('TYPESOFERRORINPROGRAMMINGComponent', () => {
  let component: TYPESOFERRORINPROGRAMMINGComponent;
  let fixture: ComponentFixture<TYPESOFERRORINPROGRAMMINGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TYPESOFERRORINPROGRAMMINGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TYPESOFERRORINPROGRAMMINGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
