import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://tankswar.com" target="_blank">Gordon</a></b> 2021
    </span>
  `,
})
export class FooterComponent {
}
