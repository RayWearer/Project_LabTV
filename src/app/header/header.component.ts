import { Component } from '@angular/core';
import { PopupService } from '../popup.service';
import { Router } from '@angular/router';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {

  constructor(private popupService: PopupService, private router: Router, public toggleService: ToggleService) {

  }

  openContactsPopup(event: Event) {
    event.preventDefault();
    this.popupService.openPopup('contacts');
  }

  openLoginPopup(event: Event) {
    event.preventDefault();
    this.popupService.openPopup('login');
  }

  toggleButtonText() {
    this.toggleService.toggleButtonText();

    this.toggleService.buttonText$.subscribe(currentText => {
      if (currentText === 'Novità') {
        this.router.navigate(['/catalogo']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}