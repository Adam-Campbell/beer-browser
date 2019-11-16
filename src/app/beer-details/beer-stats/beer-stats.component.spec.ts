import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerStatsComponent } from './beer-stats.component';

xdescribe('BeerStatsComponent', () => {
  let component: BeerStatsComponent;
  let fixture: ComponentFixture<BeerStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
