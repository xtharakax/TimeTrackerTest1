import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerCardsComponent } from './time-tracker-cards.component';

describe('TimeTrackerCardsComponent', () => {
  let component: TimeTrackerCardsComponent;
  let fixture: ComponentFixture<TimeTrackerCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTrackerCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
