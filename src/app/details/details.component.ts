import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {TmdbService} from "../tmdb.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private tmdbService: TmdbService) {}
movieData: object;

showDetails(movieID: number): void {
  this.tmdbService
    .getDetails(movieID)
    .subscribe(response => (this.movieData = response));
    
}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get("id"));
    this.showDetails(Number(this.activatedRoute.snapshot.paramMap.get("id")));
   console.log(this.movieData)
  }
  addToWatchList(){
    this.tmdbService.getNewWatchList(this.movieData)

  }
}

