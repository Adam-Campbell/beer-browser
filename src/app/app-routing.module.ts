import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'beers', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled' 
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
