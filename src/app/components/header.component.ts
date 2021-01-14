import { Component, Input } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <h1>Hello {{ name }}! Lets play!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HeaderComponent {
  @Input() name: string;
}
