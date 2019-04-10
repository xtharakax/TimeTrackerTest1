import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackerSidebarComponent } from './time-tracker-sidebar.component';

describe('TimeTrackerSidebarComponent', () => {
  let component: TimeTrackerSidebarComponent;
  let fixture: ComponentFixture<TimeTrackerSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTrackerSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
