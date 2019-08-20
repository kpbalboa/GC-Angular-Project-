import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TmdbService {
  constructor(private http: HttpClient) {}

  getMovieData(searchTerm: string): Observable<any> {
    console.log(searchTerm);
    return this.http
      .get(`https://api.themoviedb.org/3/search/movie?api_key=15e5712ff47e4688d1f70d94261a6c5d&query=${searchTerm}
  `);
  }
}
