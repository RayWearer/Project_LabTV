import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PopularMoviesService } from '../popular-movies.service';
import { PopupService } from '../popup.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-details-popup',
  templateUrl: './movie-details-popup.component.html',
  styleUrls: ['./movie-details-popup.component.css'],
})

export class MovieDetailsPopupComponent implements OnInit, OnDestroy {
  movieDetails: any;
  private movieDetailsSubscription!: Subscription;

  constructor(private popupService: PopupService, private popularMoviesService: PopularMoviesService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.movieDetailsSubscription = this.popupService.getMovieDetails().subscribe((details) => {
      this.movieDetails = details;

      this.loadCredits();
      this.loadTrailer();
    });
  }

  ngOnDestroy() {
    this.movieDetailsSubscription.unsubscribe();
  }

  closeMovieDetailsPopup() {
    this.popupService.closeMovieDetailsPopup();
  }

  getGenreNames(): string {
    return this.movieDetails.genres.map((genre: any) => genre.name).join(', ');
  }

  loadCredits() {
    if (this.movieDetails && this.movieDetails.id) {
      const apiKey = this.popularMoviesService.getApiKey();

      fetch(`https://api.themoviedb.org/3/movie/${this.movieDetails.id}/credits?api_key=${apiKey}`).then(response => response.json()).then((jsonData: { cast: any[], crew: any[] }) => {
        this.movieDetails.cast = jsonData.cast;

        const director = jsonData.crew.find((crewMember: any) => crewMember.job === 'Director');
        this.movieDetails.director = director ? director.name : '';

        this.popularMoviesService.getSimilarMovies(this.movieDetails.id).subscribe((similarMovies) => {
          this.movieDetails.similarMovies = similarMovies.results.slice(0, 4);
        });
      });
    }
  }

  getCastNames(): string {
    const actors = this.movieDetails.cast.filter((castMember: any) => castMember.order <= 5).map((castMember: any) => castMember.name);
  
    return actors.join(', ');
  }

  getSimilarMovieTitles(): string {
    return this.movieDetails.similarMovies.map((similarMovie: any) => similarMovie.title).join(', ');
  }

  loadTrailer() {
    if (this.movieDetails && this.movieDetails.id) {
      this.popularMoviesService.getMovieTrailers(this.movieDetails.id).subscribe((videos) => {
        const trailer = videos.results.find((video: any) => video.type === 'Trailer' && video.site === 'YouTube');
        if (trailer) {
          this.movieDetails.trailerKey = trailer.key;
        }
      });
    }
  }

  getTrailerUrl(): SafeResourceUrl {
    const trailerUrl = `https://www.youtube.com/embed/${this.movieDetails.trailerKey}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(trailerUrl);
  }

}