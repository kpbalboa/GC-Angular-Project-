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

  getData(searchTerm: string): void {
    this.tmdbService
      .getMovieData(searchTerm)
      .subscribe(response => (this.movieData = response["results"]));
  }
}
