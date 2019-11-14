import { Component, Input } from '@angular/core';
import { Malt, Hops } from '../../../types';

@Component({
  selector: 'app-beer-ingredients',
  templateUrl: './beer-ingredients.component.html',
  styleUrls: ['./beer-ingredients.component.css']
})
export class BeerIngredientsComponent {

  constructor() { }

  @Input() yeast: string | null;
  @Input() malts: Malt[];
  @Input() hops: Hops[];

}
