import { Component, OnInit } from '@angular/core';
import { BookmarkService } from './bookmark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.bookmarkService.hydrateBookmarksData();
  }
}
