import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from './store/movies.service';
import {Subscription} from 'rxjs';
import {Movie} from './models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];

  movies$$: Subscription;

  constructor(private moviesService: MoviesService) {
    this.movies$$ = this.moviesService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.movies$$.unsubscribe();
  }
}
