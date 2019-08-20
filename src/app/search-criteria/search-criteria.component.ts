import { Component, OnInit } from "@angular/core";
import { TmdbService } from "../tmdb.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  constructor(private tmdbService: TmdbService) {}
  movieData: any;

  ngOnInit() {}

  getData(
    genre: string,
    greaterThanOrLessThan: string,
    runTime: number,
    popularity: string
  ): void {
    console.log(genre);
    console.log(greaterThanOrLessThan);
    console.log(runTime);
    console.log(popularity);
    this.tmdbService
      .getMovieData(genre, greaterThanOrLessThan, runTime, popularity)
      .subscribe(response => {
        this.movieData = response["results"];
        console.log(this.movieData);
      });
  }
  searchMovie(searchTerm: string): void {
    this.tmdbService
      .getTitleData(searchTerm)
      .subscribe(response => (this.movieData = response["results"]));
  }
}
