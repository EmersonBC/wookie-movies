import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {faAngleLeft, faStar} from '@fortawesome/free-solid-svg-icons';
import {Endpoints} from '../../../shared/consts/endpoints';
import {Movie} from '../models/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  faBack = faAngleLeft;
  faStar = faStar;

  movie!: Movie;

  constructor(private router: Router) {
    if (history.state?.data?.movie) {
      this.movie = history.state?.data?.movie;
    } else {
      this.router.navigate([Endpoints.movies]);
    }
  }

  ngOnInit(): void {
  }

}
