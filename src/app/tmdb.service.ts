import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TmdbService {

  constructor(private http: HttpClient) { }
   genres: any[];
getMovieData(name: string, greaterThanOrLessThan: string, runTime: number, popularity: string): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=964781403df38499570b6f7233c0a524&language=en-US&with_genres=${name}&with_runtime.${greaterThanOrLessThan}=${runTime}&sort_by=vote_average.${popularity}
  `);



}
}


  getTitleData(searchTerm: string): Observable<any> {
    console.log(searchTerm);
    return this.http
      .get(`https://api.themoviedb.org/3/search/movie?api_key=15e5712ff47e4688d1f70d94261a6c5d&query=${searchTerm}
  `);
  }
}
