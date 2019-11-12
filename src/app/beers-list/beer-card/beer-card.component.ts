import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {

  @Input() beerName: string;
  @Input() beerId: number;
  @Input() beerDescription: string;
  @Input() beerImageUrl: string;
  @Input() beerTagline: string;

  constructor() { }

  ngOnInit() {
  }

}
