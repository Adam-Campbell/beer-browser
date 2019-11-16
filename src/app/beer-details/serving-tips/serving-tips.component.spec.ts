import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServingTipsComponent } from './serving-tips.component';

xdescribe('ServingTipsComponent', () => {
  let component: ServingTipsComponent;
  let fixture: ComponentFixture<ServingTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServingTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
