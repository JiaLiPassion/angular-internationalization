import { Component } from "@angular/core";
import { LocalizedComponent } from "../localized.component";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { LocaleHelper } from "../locale.helper";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent extends LocalizedComponent {
  public now = Date.now();

  public firstName: string = null;

  // Implemented languages
  public languages: Language[] = [
    { name: "English", localeId: "en-US" },
    { name: "Español", localeId: "es" },
    { name: "العربية", localeId: "ar" },
  ];
  profileForm: FormGroup;

  constructor(private router: Router) {
    super();
    this.profileForm = new FormGroup({
      firstName: new FormControl("", [
        Validators.required,
        Validators.maxLength(50),
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.maxLength(50),
      ]),
      age: new FormControl("", [
        Validators.required,
        Validators.max(130),
        Validators.min(10),
      ]),
    });
  }

  public createClicked($event): void {
    Object.keys(this.profileForm.controls).forEach((field) => {
      const control = this.profileForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
    this.router.navigate(["/profile-ok"]);
  }

  public languageSelected($event, language: Language): void {
    LocaleHelper.setCurrentLocale(language.localeId);
  }
}

interface Language {
  name: string;
  localeId: string;
}
