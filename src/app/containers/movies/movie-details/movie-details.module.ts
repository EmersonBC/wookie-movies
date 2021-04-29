import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MovieDetailsComponent} from './movie-details.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsComponent,
  },
] as Routes;

@NgModule({
  declarations: [MovieDetailsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), FontAwesomeModule],
  exports: [RouterModule],
})
export class MovieDetailsModule {}
