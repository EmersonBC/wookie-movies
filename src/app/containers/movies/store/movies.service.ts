import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Movie} from '../models/Movie';
import {Endpoints} from '../../../shared/consts/endpoints';
import {HttpService} from '../../../core/services/http-service';
import {map} from 'rxjs/operators';

@Injectable()
export class MoviesService {
  constructor(private httpService: HttpService) {
  }

  getMovies(params?: string): Observable<Movie[]> {
    return this.httpService.get<Movie[]>(Endpoints.movies, params).pipe(map(result => result.movies));
  }

  getMovie(slug: string): Observable<Movie> {
    return this.httpService.get<Movie>(Endpoints.movies + '/', slug);
  }
}
