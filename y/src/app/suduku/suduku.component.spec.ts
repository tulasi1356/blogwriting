import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudukuComponent } from './suduku.component';

describe('SudukuComponent', () => {
  let component: SudukuComponent;
  let fixture: ComponentFixture<SudukuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudukuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SudukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
