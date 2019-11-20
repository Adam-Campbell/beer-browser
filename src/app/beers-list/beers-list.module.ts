import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

import { BeersListComponent } from './beers-list/beers-list.component';
import { ListFiltersComponent } from './list-filters/list-filters.component';
import { BeersListRoutingModule } from './beers-list-routing.module';
import { BeerCardModule } from '../beer-card/beer-card.module';
import { SearchBoxComponent } from './search-box/search-box.component';


@NgModule({
  declarations: [
    BeersListComponent, 
    ListFiltersComponent, SearchBoxComponent
  ],
  imports: [
    BeersListRoutingModule,
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    BeerCardModule
  ],
  exports: [
    BeersListComponent
  ]
})
export class BeersListModule { }
