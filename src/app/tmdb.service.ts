import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient) { }

getMovieData(searchTerm: string): Observable<any>{
  return this.http.get(`https://api.themoviedb.org/3/movie/550?api_key=964781403df38499570b6f7233c0a524`);
}
}
