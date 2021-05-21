import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicToeComponent } from './tic-toe.component';

describe('TicToeComponent', () => {
  let component: TicToeComponent;
  let fixture: ComponentFixture<TicToeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicToeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
