import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { PopupComponent } from './popup/popup.component';
import { PopularMoviesService } from './popular-movies.service';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';
import { ToggleService } from './toggle.service';
import { MovieDetailsPopupComponent } from './movie-details-popup/movie-details-popup.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PopupComponent,
    MovieCatalogComponent,
    MovieDetailsPopupComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PopularMoviesService, ToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
