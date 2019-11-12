import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { BeersListComponent } from './beers-list/beers-list.component';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { ListFiltersComponent } from './list-filters/list-filters.component';
import { BeersListRoutingModule } from './beers-list-routing.module';


@NgModule({
  declarations: [
    BeersListComponent, 
    BeerCardComponent, 
    ListFiltersComponent
  ],
  imports: [
    BeersListRoutingModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatSliderModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    BeersListComponent
  ]
})
export class BeersListModule { }
