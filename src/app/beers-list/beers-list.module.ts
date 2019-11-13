import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { BeersListComponent } from './beers-list/beers-list.component';
import { ListFiltersComponent } from './list-filters/list-filters.component';
import { BeersListRoutingModule } from './beers-list-routing.module';
import { BeerCardModule } from '../beer-card/beer-card.module';


@NgModule({
  declarations: [
    BeersListComponent, 
    ListFiltersComponent
  ],
  imports: [
    BeersListRoutingModule,
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatSliderModule,
    MatInputModule,
    ReactiveFormsModule,
    BeerCardModule
  ],
  exports: [
    BeersListComponent
  ]
})
export class BeersListModule { }
