import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BeerDetailsRoutingModule } from './beer-details-routing.module';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { RandomBeerDetailsComponent } from './random-beer-details/random-beer-details.component';
import { BeerHeaderComponent } from './beer-header/beer-header.component';
import { BeerStatsComponent } from './beer-stats/beer-stats.component';
import { BeerIngredientsComponent } from './beer-ingredients/beer-ingredients.component';
import { ServingTipsComponent } from './serving-tips/serving-tips.component';
import { BeerDetailsViewComponent } from './beer-details-view/beer-details-view.component';


@NgModule({
  declarations: [
    BeerDetailsComponent,
    RandomBeerDetailsComponent,
    BeerHeaderComponent,
    BeerStatsComponent,
    BeerIngredientsComponent,
    ServingTipsComponent,
    BeerDetailsViewComponent
  ],
  imports: [
    CommonModule,
    BeerDetailsRoutingModule,
    MatChipsModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class BeerDetailsModule { }
