import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MoviesComponent} from './movies.component';
import {MoviesService} from './store/movies.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
  },
] as Routes;

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [MoviesService],
  exports: [RouterModule],
})
export class MoviesModule {
}
