import { HttpHeaders } from '@angular/common/http';

export const API_KEY = 'c13d9de91ed24b13abd23ec72a84ddbe';
export const RAPIDAPI_HOST = 'rawg-video-games-database.p.rapidapi.com';
export const RAPIDAPI_KEY = '45f632c4eemsh81a9c692e52deb7p18cd42jsn0cac7a27ace0';

export const API_HEADERS = new HttpHeaders({
  'x-rapidapi-host': RAPIDAPI_HOST,
  'x-rapidapi-key': RAPIDAPI_KEY
});