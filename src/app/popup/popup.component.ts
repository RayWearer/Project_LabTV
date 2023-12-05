import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})

export class PopupComponent implements OnInit {
  currentPopup: string | null = null;
  contactForm: FormGroup;
  loginForm: FormGroup;
  registrationForm: FormGroup;

  constructor(private popupService: PopupService, private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s']{2,}$/)]],
      surname: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ\s']{2,}$/)]],
      contactEmail: ['', [Validators.required, Validators.email]],
      telNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      text: ['', [Validators.required, Validators.minLength(30)]],
      privacy: [false, [Validators.requiredTrue]],
    });

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordComplexityValidator()]],
    });

    this.registrationForm = this.formBuilder.group({
      regEmail: ['', [Validators.required, Validators.email]],
      regPassword: ['', [Validators.required, Validators.minLength(8), this.passwordComplexityValidator()]],
      confirmPassword: ['', [Validators.required, this.matchPassword('regPassword')]],
      checkTandC: [false, [Validators.requiredTrue]],
    });
  }

  ngOnInit() {
    this.popupService.getPopupState().subscribe((popupName) => {
      this.currentPopup = popupName;
      // console.log('Popup aperto:', popupName);
    });
  }

  openRegistrationPopup() {
    this.popupService.openPopup('registration');
  }

  closePopup() {
    this.popupService.closePopup();
  }

  passwordComplexityValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;

      const hasUppercase = /[A-Z]/.test(value);
      const hasLowercase = /[a-z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value);

      const isValid = hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter;

      return isValid ? null : { complexity: true };
    };
  }

  matchPassword(controlName: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;
      const confirmPassword = control.root.get(controlName)?.value;
  
      return password === confirmPassword ? null : { mismatch: true };
    };
  }

}