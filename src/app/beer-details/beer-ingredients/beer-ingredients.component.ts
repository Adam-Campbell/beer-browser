import { Component, OnInit, Input } from '@angular/core';
import { Malt, Hops } from '../../../types';

@Component({
  selector: 'app-beer-ingredients',
  templateUrl: './beer-ingredients.component.html',
  styleUrls: ['./beer-ingredients.component.css']
})
export class BeerIngredientsComponent implements OnInit {

  constructor() { }

  @Input() yeast: string | null;
  @Input() malts: Malt[];
  @Input() hops: Hops[];

  ngOnInit() {
  }

}
