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
  kids: IMovies;
  drama: IMovies;
  serachedResult: any;
  isSearched: boolean;

  constructor(private moviesService: MoviesService) { }

  search(myQuery){

    this.moviesService
    .findMovie(myQuery.search)
    .subscribe(data=>{
      this.serachedResult=data;
      this.isSearched=true;
    });
  }

  ngOnInit() {
    this.moviesService
      .getPopular()
      .subscribe(data => {
        this.popular = data;
      });

    this.moviesService
      .getTheatre()
      .subscribe(data => {
        this.theatre = data;
      });

    this.moviesService
      .getKidsMovies()
      .subscribe(data => {
        this.kids = data;
      });

    this.moviesService
      .getDrama()
      .subscribe(data => {
        this.drama = data;
      });
  }
}
