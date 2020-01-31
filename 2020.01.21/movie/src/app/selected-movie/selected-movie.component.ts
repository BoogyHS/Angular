import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';
import { IMovieDetails } from '../models/movieDetails';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.scss']
})
export class SelectedMovieComponent implements OnInit {
  myMovie: IMovieDetails;
  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.movieService.getMovie(id).subscribe((selectedMovie) => {
        this.myMovie = selectedMovie;
      });
    });
  }

}
