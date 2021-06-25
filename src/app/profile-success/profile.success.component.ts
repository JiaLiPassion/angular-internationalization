import { Component } from "@angular/core";
import { LocalizedComponent } from "../localized.component";
@Component({
  selector: "app-profile-success",
  template: `OK!`,
})
export class ProfileSuccessComponent extends LocalizedComponent {
  constructor() {
    super();
  }
}
