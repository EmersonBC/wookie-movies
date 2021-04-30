import {Movie} from '../../containers/movies/models/Movie';

export interface AppState {
  movies: Movie[];
  genres: string[];
}
