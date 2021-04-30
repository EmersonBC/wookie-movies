import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MoviesComponent} from './movies.component';
import {MoviesService} from './store/movies.service';
import {HttpClientModule} from '@angular/common/http';
import {GenreFilterPipe} from './pipes/genre-filter.pipe';
import {LazyLoadImageModule} from 'ng-lazyload-image';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
  },
] as Routes;

@NgModule({
  declarations: [MoviesComponent, GenreFilterPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes)
  ],
  providers: [MoviesService],
  exports: [RouterModule],
})
export class MoviesModule {
}
