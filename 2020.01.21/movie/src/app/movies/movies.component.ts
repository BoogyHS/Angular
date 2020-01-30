import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { IMovies } from '../models/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  popular: IMovies;
  theatre: IMovies;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService
      .getPopular()
      .subscribe(data => {
        this.popular = data;
        console.log(this.popular);

      });

    this.moviesService
      .getTheatre()
      .subscribe(data => {
        this.theatre = data;
      });
  }
}
