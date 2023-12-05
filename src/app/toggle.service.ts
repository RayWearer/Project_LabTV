import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ToggleService {
  private buttonTextSubject = new BehaviorSubject<string>('Catalogo');
  buttonText$ = this.buttonTextSubject.asObservable();

  toggleButtonText() {
    const currentText = this.buttonTextSubject.value;
    const newText = currentText === 'Catalogo' ? 'Novità' : 'Catalogo';
    this.buttonTextSubject.next(newText);
  }

  private searchVisibleSubject = new BehaviorSubject<boolean>(false);
  searchVisible$ = this.searchVisibleSubject.asObservable();

  handleSearchBarVisibility() {
    this.searchVisibleSubject.next(!this.searchVisibleSubject.value);
  }
}