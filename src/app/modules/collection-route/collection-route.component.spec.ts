import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionRouteComponent } from './collection-route.component';

describe('CollectionRouteComponent', () => {
  let component: CollectionRouteComponent;
  let fixture: ComponentFixture<CollectionRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
