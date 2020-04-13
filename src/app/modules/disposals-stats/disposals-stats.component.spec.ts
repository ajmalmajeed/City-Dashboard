import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposalsStatsComponent } from './disposals-stats.component';

describe('DisposalsStatsComponent', () => {
  let component: DisposalsStatsComponent;
  let fixture: ComponentFixture<DisposalsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisposalsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposalsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
