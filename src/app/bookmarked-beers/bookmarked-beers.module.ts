import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkedBeersComponent } from './bookmarked-beers/bookmarked-beers.component';
import { BookmarkedBeersRoutingModule } from './bookmarked-beers-routing.module';


@NgModule({
  declarations: [
    BookmarkedBeersComponent
  ],
  imports: [
    CommonModule,
    BookmarkedBeersRoutingModule
  ]
})
export class BookmarkedBeersModule { }
