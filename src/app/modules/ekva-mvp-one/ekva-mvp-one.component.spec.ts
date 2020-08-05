import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkvaMvpOneComponent } from './ekva-mvp-one.component';

describe('EkvaMvpOneComponent', () => {
  let component: EkvaMvpOneComponent;
  let fixture: ComponentFixture<EkvaMvpOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkvaMvpOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkvaMvpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
