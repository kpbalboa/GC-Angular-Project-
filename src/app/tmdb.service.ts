import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
genre: object[]= this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=964781403df38499570b6f7233c0a524&language=en-US`);
  constructor(private http: HttpClient) { }

getMovieData(genre: string, greaterThanOrLessThan: string, runTime: number, popularity: string): Observable<any>{
  console.log((this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=964781403df38499570b6f7233c0a524&language=en-US`)));
  return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=964781403df38499570b6f7233c0a524&language=en-US&with_genres=${genre}&with_runtime.${greaterThanOrLessThan}=${runTime}&sort_by=vote_average.${popularity}
  `);
}
}
// /discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc