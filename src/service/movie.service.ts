import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Movie} from '../model/movie';
import {FKGenre} from '../model/FKGenre';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public headers: any | null = sessionStorage.getItem('token');
  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.headers,
    }).set('Content-Type', 'application/json'),
  };
  formMovie = new FormGroup({
    title: new FormControl('', [Validators.required]),
    poster: new FormControl('', [Validators.required]),
    details: new FormControl('', [Validators.required]),
    movieStatus: new FormControl(true, [Validators.required]),
    linkTrailer: new FormControl(''),
    linkMovie: new FormControl('', [Validators.required]),
    releaseDate: new FormControl('', [Validators.required])
  });
  private httpOptionsBasic = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };

  constructor(private httpClient: HttpClient) {
  }


  initializeFormGroup() {
    this.formMovie = new FormGroup({
      title: new FormControl('', [Validators.required]),
      poster: new FormControl('', [Validators.required]),
      details: new FormControl('', [Validators.required]),
      movieStatus: new FormControl(true, [Validators.required]),
      linkTrailer: new FormControl(''),
      linkMovie: new FormControl('', [Validators.required]),
      releaseDate: new FormControl('', [Validators.required])
    });
  }

  public getMovie(): Observable<any> {
    this.headers = sessionStorage.getItem('token');
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.headers,
      }).set('Content-Type', 'application/json'),
    };
    return this.httpClient.get<any>(
      'http://localhost:8080/api/movieDetail/getMovieDetailAll',
      this.httpOptions
    );
  }

  public getMovieByTitle(title: string): Observable<any> {
    this.headers = sessionStorage.getItem('token');
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.headers,
      }).set('Content-Type', 'application/json'),
    };
    return this.httpClient.get<any>(
      'http://localhost:8080/api/movieDetail/getMovieDetailByTitle/' + title,
      this.httpOptions
    );
  }

  public addMovie(movie: Movie) {
    if (sessionStorage.getItem('token')) {
      this.headers = 'Bearer ' + sessionStorage.getItem('token');
    }
    return this.httpClient.post(
      `http://localhost:8080/api/movieDetail/addMovie`,
      JSON.stringify(movie), this.httpOptions);
  }

  public editMovie(movie: Movie) {
    if (sessionStorage.getItem('token')) {
      this.headers = sessionStorage.getItem('token');
    }
    return this.httpClient.put(
      `http://localhost:8080/api/movieDetail/editMovieDetail`,
      JSON.stringify(movie), this.httpOptions);
  }

  public addGenretoMovie(fkGenre: FKGenre) {
    if (sessionStorage.getItem('token')) {
      this.headers = sessionStorage.getItem('token');
    }
    return this.httpClient.post(
      `http://localhost:8080/api/movieDetail/addMovie`,
      JSON.stringify(fkGenre), this.httpOptions);
  }

  public deleteMovie(id: number) {
    if (sessionStorage.getItem('token')) {
      this.headers = sessionStorage.getItem('token');
    }
    return this.httpClient.delete(
      `http://localhost:8080/api/movieDetail/remove/` + id, this.httpOptions);
  }
}
