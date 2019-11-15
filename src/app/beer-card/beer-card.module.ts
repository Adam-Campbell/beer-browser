import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BeerCardComponent } from './beer-card.component';

@NgModule({
    declarations: [
        BeerCardComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule
    ],
    exports: [
        BeerCardComponent
    ]
})
export class BeerCardModule { }