import { Component, Input } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <h1>Hello, {{ name }}!</h1>
  `,
  styles: []
})
export class HeaderComponent {
  @Input() public name: string;
}
