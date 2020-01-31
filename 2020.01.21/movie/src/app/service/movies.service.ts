import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovies } from '../models/movies';
import { IMovieDetails } from '../models/movieDetails';

const apiKey = 'df1873e8be545f002c4b9d369a35c525';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  path: string = 'https://api.themoviedb.org/3/';
  popular: string = 'discover/movie?sort_by=popularity.desc';
  theatre: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  kids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  drama: string = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';
  authentication: string = '&api_key=';
  movie: string = 'movie/';
  movieAuth: string = '?api_key=';
  search: string = 'search/movie?query=';

  constructor(private http: HttpClient) { }

  getPopular(): Observable<IMovies> {
    return this.http.get<IMovies>(this.path + this.popular + this.authentication + apiKey);
  }

  getTheatre(): Observable<IMovies> {
    return this.http.get<IMovies>(this.path + this.theatre + this.authentication + apiKey);
  }

  getKidsMovies(): Observable<IMovies> {
    return this.http.get<IMovies>(this.path + this.kids + this.authentication + apiKey);
  }

  getDrama(): Observable<IMovies> {
    return this.http.get<IMovies>(this.path + this.drama + this.authentication + apiKey);
  }

  getMovie(id): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(this.path + this.movie + id + this.movieAuth + apiKey);
  }

  findMovie(name) {
    return this.http.get(this.path + this.search + name + this.authentication + apiKey);
  }
}
