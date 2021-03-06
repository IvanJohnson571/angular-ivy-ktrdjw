import { Component, OnInit } from "@angular/core";
import { Movie } from "../models/movie";

import { MoviesService } from "../services/movies.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  popular: any;
  theaters: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => {
      this.popular = data;
      console.log(this.popular);
    });

    this.moviesService.getPopular().subscribe(data => {
      this.theaters = data;
      console.log(this.theaters);
    });
  }
}
