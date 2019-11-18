import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomBeerDetailsComponent } from './random-beer-details.component';

xdescribe('RandomBeerDetailsComponent', () => {
  let component: RandomBeerDetailsComponent;
  let fixture: ComponentFixture<RandomBeerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomBeerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomBeerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
