import {Pipe, PipeTransform} from '@angular/core';
import {Movie} from '../models/Movie';

@Pipe({name: 'genreFilter'})
export class GenreFilterPipe implements PipeTransform {
  transform(movies: Movie[], genre: string): Movie[] {
    return movies.filter(m => !!m.genres.find(g => g === genre));
  }
}
