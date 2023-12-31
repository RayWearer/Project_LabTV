import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'catalogo', component: MovieCatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
