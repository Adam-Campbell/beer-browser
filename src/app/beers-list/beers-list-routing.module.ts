import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeersListComponent } from './beers-list/beers-list.component';

const routes: Routes = [
    { path: 'beers', component: BeersListComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BeersListRoutingModule { }