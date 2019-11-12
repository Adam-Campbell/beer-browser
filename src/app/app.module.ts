import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { BeersListModule } from './beers-list/beers-list.module';
import { BeerDetailsModule } from './beer-details/beer-details.module';
import { BookmarkedBeersModule } from './bookmarked-beers/bookmarked-beers.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    BeersListModule,
    BeerDetailsModule,
    BookmarkedBeersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
