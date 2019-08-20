import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TmdbService {
  private readonly BASE_URL = "https://api.themoviedb.org/3";
  private readonly API_KEY = "964781403df38499570b6f7233c0a524";

  constructor(private http: HttpClient) {}

  getMovieData(
    genre: string,
    greaterThanOrLessThan: string,
    runTime: number,
    popularity: string
  ): Observable<any> {
    console.log(
      this.http.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=964781403df38499570b6f7233c0a524&language=en-US`
      )
    );

    const url = `${this.BASE_URL}/discover/movie`;
    const params = new HttpParams()
      .set("api_key", this.API_KEY)
      .set("language", "en-US")
      .set("with_genres", genre)
      .set(`with_runtime.${greaterThanOrLessThan}`, runTime.toString())
      .set("sort_by", `vote_average.${popularity}`);

    return this.http.get(url, { params });
  }

  getTitleData(searchTerm: string): Observable<any> {
    return this.http
      .get(`https://api.themoviedb.org/3/search/movie?api_key=15e5712ff47e4688d1f70d94261a6c5d&query=${searchTerm}
  `);
  }

  getDetails(movieID: number): Observable<any> {
    return this.http
      .get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=15e5712ff47e4688d1f70d94261a6c5d&language=en-US
      `);
  }
}
