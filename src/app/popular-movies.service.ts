import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PopularMoviesService {
  private apiKey = 'cf549eb84dfef26530f63e11922d698b';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {
    
  }

  getApiKey(): string {
    return this.apiKey;
  }

  getPopularMovies(page: number): Observable<any> {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`;
    return this.http.get(url);
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getSimilarMovies(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}/similar?api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getSearchResult(query: string): Observable<any> {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get(url);
  }

  getMovieTrailers(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}/videos?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(url);
  }
}