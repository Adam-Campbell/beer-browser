import { Component, OnInit } from '@angular/core';
import { Beer } from '../../../types';
import { BookmarkService } from '../../bookmark.service';

@Component({
	selector: 'app-bookmarked-beers',
  	templateUrl: './bookmarked-beers.component.html',
  	styleUrls: ['./bookmarked-beers.component.css']
})
export class BookmarkedBeersComponent implements OnInit {

	constructor(private bookmarkService: BookmarkService) { }

	beers: Beer[];

	ngOnInit() {
		this.bookmarkService.bookmarks$.subscribe(beers => this.beers = beers);
	}

}
