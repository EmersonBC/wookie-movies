import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MoviesModule} from '../containers/movies/movies.module';
import {MovieDetailsModule} from '../containers/movies/movie-details/movie-details.module';
import {StoreModule} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {HttpService} from './services/http-service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {moviesReducer} from '../containers/movies/store/movies.reducer';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    MovieDetailsModule,
    NgbModule,
    FontAwesomeModule,
    LazyLoadImageModule,
    FormsModule,
    StoreModule.forRoot({
      movies: moviesReducer,
    }),
  ],
  providers: [HttpClient, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
