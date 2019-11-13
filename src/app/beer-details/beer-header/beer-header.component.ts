import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beer-header',
  templateUrl: './beer-header.component.html',
  styleUrls: ['./beer-header.component.css']
})
export class BeerHeaderComponent implements OnInit {

  constructor() { }

  @Input() beerName: string;
  @Input() tagline: string;
  @Input() description: string;
  @Input() imageUrl: string;

  ngOnInit() {
  }

}
