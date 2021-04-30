import {Component} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {MoviesService} from '../containers/movies/store/movies.service';
import {Movie} from '../containers/movies/models/Movie';
import {getMovies} from '../containers/movies/store/movies.actions';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {Endpoints} from '../shared/consts/endpoints';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faSearch = faSearch;

  search = '';

  constructor(private moviesService: MoviesService, private store: Store, private router: Router) {
  }

  searchMovie(): void {
    this.search = this.search.trim();

    const currentRoute = this.router.routerState.snapshot.url.split('/').filter(s => !!s);

    if (currentRoute.length > 1 || currentRoute[0] !== Endpoints.movies) {
      this.router.navigate([Endpoints.movies], {state: {data: {movieSearch: '?q=' + this.search}}});
    } else {
      this.moviesService
        .getMovies('?q=' + this.search)
        .subscribe((movies: Movie[]) => {
          this.store.dispatch(getMovies({movies}));
        });
    }
  }
}
