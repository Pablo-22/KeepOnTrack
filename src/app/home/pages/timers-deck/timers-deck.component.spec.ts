import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimersDeckComponent } from './timers-deck.component';

describe('TimersDeckComponent', () => {
  let component: TimersDeckComponent;
  let fixture: ComponentFixture<TimersDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimersDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimersDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
