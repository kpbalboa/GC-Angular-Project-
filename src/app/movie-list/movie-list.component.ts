import { Component, OnInit } from "@angular/core";
import { TmdbService } from "../tmdb.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  constructor(private tmdbService: TmdbService) {}
  movieData: any;

  ngOnInit() {}
  // searchMovie(searchTerm: string): void {
  //   this.tmdbService
  //     .getTitleData(searchTerm)
  //     .subscribe(response => (this.movieData = response["results"]));
  // }
}
