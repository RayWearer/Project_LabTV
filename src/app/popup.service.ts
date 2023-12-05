import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class PopupService {
  private popupSubject = new BehaviorSubject<string | null>(null);
  private movieDetailsSubject = new BehaviorSubject<any | null>(null);

  openPopup(popupName: string) {
    this.popupSubject.next(popupName);
  }

  closePopup() {
    this.popupSubject.next(null);
  }

  getPopupState(): Observable<string | null> {
    return this.popupSubject.asObservable();
  }

  getMovieDetails(): Observable<any | null> {
    return this.movieDetailsSubject.asObservable();
  }

  openMovieDetailsPopup(movieDetails: any) {
    this.movieDetailsSubject.next(movieDetails);
    this.openPopup('movie-details-popup');
  }

  closeMovieDetailsPopup() {
    this.movieDetailsSubject.next(null);
    this.closePopup();
  }
}