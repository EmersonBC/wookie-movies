import {createAction, props} from '@ngrx/store';
import {Movie} from '../models/Movie';

export const getMovies = createAction(
  '[Movie] Get Movies Success',
  props<{ movies: Movie[] }>()
);
