import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BeerCardComponent } from './beer-card.component';

@NgModule({
    declarations: [
        BeerCardComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [
        BeerCardComponent
    ]
})
export class BeerCardModule { }