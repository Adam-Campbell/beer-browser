import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerDetailsRoutingModule } from './beer-details-routing.module';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { RandomBeerDetailsComponent } from './random-beer-details/random-beer-details.component';



@NgModule({
  declarations: [
    BeerDetailsComponent,
    RandomBeerDetailsComponent
  ],
  imports: [
    CommonModule,
    BeerDetailsRoutingModule
  ]
})
export class BeerDetailsModule { }
