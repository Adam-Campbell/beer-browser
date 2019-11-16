import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetailsViewComponent } from './beer-details-view.component';

xdescribe('BeerDetailsViewComponent', () => {
  let component: BeerDetailsViewComponent;
  let fixture: ComponentFixture<BeerDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
