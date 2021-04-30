import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from './store/movies.service';
import {Movie} from './models/Movie';
import {Router} from '@angular/router';
import {Endpoints} from '../../shared/consts/endpoints';
import {select, Store} from '@ngrx/store';
import {selectMovies} from '../../core/state/movies.selectors';
import {getMovies} from './store/movies.actions';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies!: Movie[];
  genres: string[] = [];
  isLoading = true;

  private movies$$: Subscription;

  constructor(private router: Router,
              private store: Store,
              private moviesService: MoviesService) {

    // @ts-ignore
    this.movies$$ = this.store.pipe(select(selectMovies))
      .subscribe((movies: Movie[]) => {
        this.movies = movies;

        this.updateGenres();
        this.isLoading = false;
      });

    this.isLoading = true;
    this.moviesService
      .getMovies(history.state?.data?.movieSearch ?? '')
      .subscribe((movies: Movie[]) => this.store.dispatch(getMovies({movies})));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.movies$$.unsubscribe();
  }

  openDetails(movie: Movie): void {
    this.router.navigate([Endpoints.movies, movie.slug], {state: {data: {movie}}});
  }

  private updateGenres(): void {
    this.genres = [];

    this.genres = this.genres.concat(...this.movies.map(movie => movie.genres)).sort();

    // Remove duplicates
    this.genres = [...new Set(this.genres)];
  }
}
