import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MovieDetailsComponent} from './movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsComponent,
  },
] as Routes;

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDetailsModule {}
