import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Beer } from '../types';
import { LocalStorageMediator } from './localStorageMediator';

/*

Inject http service to make calls. 


API Details:

Base URL:
https://api.punkapi.com/v2/

/beers endpoint will be used for getBeers and searchBeer.

/beers/id endpoint will be used for getBeer

/beers/random endpoint will be used for getRandomBeer


Methods:

getBeers(options) 
	Get all beers (or rather a page of them), filtered by options specified

searchBeers(searchTerm)
	Get all beers matching search term
	This method will be bound to an input so should be debounced.

getBeer(id)
	Get beer matching id

getRandomBeer()
	Get random beer




It should also manage saved beers, this means:

- It should expose the saved beers as an observable that components can subscribe to for
changes.

- It should expose a method for adding a beer to the saved beer collection.

- It should expose a method for removing a beer from the saved beer collection.

- It should support persisting the saved beers. However I would like to abstract this into a
different class for more flexibility (the current implementation will just use localStorage but
it should be made easy to swap this implementation out at a later point). 

- Upon app startup it should hydrate the saved beers from wherever they are being persisted 
(currently localStorage)

- Whenever a change is made to the saved beers (beer is added or removed) it should persist 
this change (actual persisting will be delegated to the other class, but it will be 
triggered here).



*/


@Injectable({
  providedIn: 'root'
})
export class BeerService {

	private baseUrl = 'https://api.punkapi.com/v2/';

	private persistenceMediator = new LocalStorageMediator();

	private savedBeers: Beer[] = [];

	// Allows external components to subscribe and get the latest saved beers state
	private savedBeersSource = new BehaviorSubject<Beer[]>([]);
	savedBeers$ = this.savedBeersSource.asObservable();

	constructor(private http: HttpClient) { }

	hydrateBookmarksData() {
		const loadedBeers = this.persistenceMediator.load();
		//console.log('loadedBeers is...', loadedBeers);
		this.savedBeers = loadedBeers;
		this.emitBeersState();
	}

	private emitBeersState() {
		this.savedBeersSource.next(this.savedBeers);
	}

	saveBeer(beer: Beer) {
		this.savedBeers.push(beer);
		this.emitBeersState();
		this.persistenceMediator.save(this.savedBeers);
	}

	removeBeer(id: number) {
		const idx = this.savedBeers.findIndex(beer => beer.id === id);
		if (idx > -1) {
			this.savedBeers.splice(idx, 1);
			this.emitBeersState();
			this.persistenceMediator.save(this.savedBeers);
		}
	}

	checkIfBookmarked(id: number): boolean {
		return Boolean(
			this.savedBeers.find(beer => beer.id === id)
		);
	}

  	getBeers(filters = {}): Observable<Beer[]> {
		let httpParams = new HttpParams().set('per_page', '30');
		for (let prop in filters) {
			if (filters[prop]){
				httpParams = httpParams.set(prop, filters[prop]);
			}
		}
		return this.http.get<Beer[]>(`${this.baseUrl}beers`, { params: httpParams });
  	}

  	searchBeers(searchTerm: string) {
		const options = {
			params: new HttpParams().set('beer_name', searchTerm.replace(/ /g, '_'))
		};
		return this.http.get<Beer[]>(`${this.baseUrl}beers`, options);
  	}

  	getBeer(id: number): Observable<Beer[]> {
		return this.http.get<Beer[]>(`${this.baseUrl}beers/${id}`);
  	}

  	getRandomBeer(): Observable<Beer[]> {
		return this.http.get<Beer[]>(`${this.baseUrl}beers/random`);
  	}
}
