import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../types';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://api.punkapi.com/v2/';

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

  getBeerById(id: number): Observable<Beer[]> {
		return this.http.get<Beer[]>(`${this.baseUrl}beers/${id}`);
  }

  getRandomBeer(): Observable<Beer[]> {
		return this.http.get<Beer[]>(`${this.baseUrl}beers/random`);
  }
    
}
