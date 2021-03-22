import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sandbox',
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  `
})
export class SandboxComponent {
  favoriteColorControl = new FormControl('');
}
