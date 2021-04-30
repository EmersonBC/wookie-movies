import {getMovies} from './movies.actions';
import {createReducer, on} from '@ngrx/store';
import {Movie} from '../models/Movie';

export const initialState: ReadonlyArray<Movie> = [];
export const initialStateGenre: ReadonlyArray<string> = [];

export const moviesReducer = createReducer(
  initialState,
  on(getMovies, (state, {movies}) => [...movies]),
);
