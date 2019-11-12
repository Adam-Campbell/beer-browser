import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { RandomBeerDetailsComponent } from './random-beer-details/random-beer-details.component';

const routes: Routes = [
    { path: 'beer/random', component: RandomBeerDetailsComponent },
    { path: 'beer/:id', component: BeerDetailsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BeerDetailsRoutingModule { }