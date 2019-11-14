import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beer-header',
  templateUrl: './beer-header.component.html',
  styleUrls: ['./beer-header.component.css']
})
export class BeerHeaderComponent {

  constructor() { }

  @Input() beerName: string;
  @Input() tagline: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() isBookmarked: boolean;
  @Output() bookmarkButtonClicked = new EventEmitter();

  handleButtonClick() {
    this.bookmarkButtonClicked.emit();
  }

}
