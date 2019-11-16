import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { BeerCardComponent } from './beer-card.component';
import { TruncateWithEllipsisPipe } from '../truncate-with-ellipsis.pipe';

// need to work out how to provide @Input values to the component.

xdescribe('BeerCardComponent', () => {
  let component: BeerCardComponent;
  let fixture: ComponentFixture<BeerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        BeerCardComponent,
        TruncateWithEllipsisPipe 
      ],
      imports: [
        //CommonModule,
        //RouterModule,
        RouterTestingModule.withRoutes([]),
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
