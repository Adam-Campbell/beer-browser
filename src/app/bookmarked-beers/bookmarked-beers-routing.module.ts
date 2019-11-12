import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkedBeersComponent } from './bookmarked-beers/bookmarked-beers.component';

const routes: Routes = [
    { path: 'bookmarked', component: BookmarkedBeersComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BookmarkedBeersRoutingModule { }