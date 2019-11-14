import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from '../types';
import { LocalStorageMediator } from './localStorageMediator';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor() { }

  private persistenceMediator = new LocalStorageMediator();

	private bookmarks: Beer[] = [];

	// Allows external components to subscribe and get the latest saved beers state
	private bookmarksSource = new BehaviorSubject<Beer[]>([]);
  bookmarks$ = this.bookmarksSource.asObservable();
  
  hydrateBookmarksData() {
		const loadedBookmarks = this.persistenceMediator.load();
		this.bookmarks = loadedBookmarks;
		this.emitState();
	}

	private emitState() {
		this.bookmarksSource.next(this.bookmarks);
	}

	addBookmark(beer: Beer) {
		this.bookmarks.push(beer);
		this.emitState();
		this.persistenceMediator.save(this.bookmarks);
	}

	removeBookmark(id: number) {
		const idx = this.bookmarks.findIndex(beer => beer.id === id);
		if (idx > -1) {
			this.bookmarks.splice(idx, 1);
			this.emitState();
			this.persistenceMediator.save(this.bookmarks);
		}
	}

	checkIfBookmarked(id: number): boolean {
		return Boolean(
			this.bookmarks.find(beer => beer.id === id)
		);
  }
  
}
