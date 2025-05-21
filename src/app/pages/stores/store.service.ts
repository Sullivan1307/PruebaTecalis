import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_HEADERS, API_KEY } from '../shared/api-config';
import { StoreDetails, StoreRs } from './models/store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private storesUrl = `https://rawg-video-games-database.p.rapidapi.com/stores?key=${API_KEY}`;

  constructor( readonly http: HttpClient) { }

  getStores(): Observable<StoreRs> {
    return this.http.get<StoreRs>(this.storesUrl, { headers: API_HEADERS });      
  }

  getStoreDetails(id: number): Observable<StoreDetails> {
    const url = `https://rawg-video-games-database.p.rapidapi.com/stores/${id}?key=${API_KEY}`;
    return this.http.get<StoreDetails>(url, { headers: API_HEADERS });
  }
}
