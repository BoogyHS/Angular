import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovies } from '../models/movies';

const apiKey = 'df1873e8be545f002c4b9d369a35c525';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  path: string = 'https://api.themoviedb.org/3/';
  popular: string = 'discover/movie?sort_by=popularity.desc';
  theatre: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  authentication: string = '&api_key=';

  constructor(private http: HttpClient) { }
  getPopular(): Observable<IMovies> {
    return this.http.get<IMovies>(this.path + this.popular + this.authentication + apiKey);
  }
  getTheatre(): Observable<IMovies> {
    return this.http.get<IMovies>(this.path + this.theatre + this.authentication + apiKey);
  }
}
