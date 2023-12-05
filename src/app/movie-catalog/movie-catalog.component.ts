import { Component, OnInit } from '@angular/core';
import { PopularMoviesService } from '../popular-movies.service';
import { PopupService } from '../popup.service';
import { MovieSearchService } from '../movie-search.service';

@Component({
  selector: 'app-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.css'],
})

export class MovieCatalogComponent implements OnInit {
  movies: any[] = [];
  currentPage: number = 1;

  constructor(private popularMoviesService: PopularMoviesService, private popupService: PopupService, private movieSearchService: MovieSearchService) {}

  ngOnInit() {
    this.printPopularMovies();

    this.movieSearchService.searchQuery$.subscribe((query) => {
      if (query) {
        this.printSearchResult(query);
      } else {
        this.printPopularMovies();
      }
    });
  }

  private scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  printPopularMovies() {
    this.popularMoviesService.getPopularMovies(this.currentPage).subscribe((data) => {
      this.movies = data.results;
      this.scrollToTop();
    });
  }

  changePage(newPage: number) {
    this.currentPage = newPage;
    this.printPopularMovies();
  }

  openMovieDetails(movie: any) {
    this.popularMoviesService.getMovieDetails(movie.id).subscribe((movieDetails) => {
      this.popupService.openMovieDetailsPopup(movieDetails);
    });
  }

  printSearchResult(query: string) {
    this.popularMoviesService.getSearchResult(query).subscribe((data) => {
      this.movies = data.results;
      this.scrollToTop();
    });
  }
}