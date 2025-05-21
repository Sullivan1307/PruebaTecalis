import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_HEADERS, API_KEY } from '../shared/api-config';
import { Game } from './models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(readonly http: HttpClient) { }

  getGameDetails(id: number): Observable<Game> {
    const url = `https://rawg-video-games-database.p.rapidapi.com/games/${id}?key=${API_KEY}`;
    return this.http.get<Game>(url, { headers: API_HEADERS});
  }
}
