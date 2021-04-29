import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    loadChildren: () => import('../containers/movies/movies.module').then(m => m.MoviesModule),
  },
  {
    path: 'movies/:id',
    loadChildren: () => import('../containers/movies/movie-details/movie-details.module').then(m => m.MovieDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
