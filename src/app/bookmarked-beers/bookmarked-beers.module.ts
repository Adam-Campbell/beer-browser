import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkedBeersComponent } from './bookmarked-beers/bookmarked-beers.component';
import { BookmarkedBeersRoutingModule } from './bookmarked-beers-routing.module';
import { BeerCardModule } from '../beer-card/beer-card.module'

@NgModule({
  declarations: [
    BookmarkedBeersComponent
  ],
  imports: [
    CommonModule,
    BookmarkedBeersRoutingModule,
    BeerCardModule
  ]
})
export class BookmarkedBeersModule { }
