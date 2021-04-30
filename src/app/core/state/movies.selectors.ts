import {createSelector} from '@ngrx/store';
import {AppState} from './app.state';
import {Movie} from '../../containers/movies/models/Movie';

export const selectMovies = createSelector(
  (state: AppState) => state.movies,
  (movies: Movie[]) => movies
);
