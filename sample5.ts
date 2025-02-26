// src/app/hello.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello, {{ name }}!</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class HelloComponent {
  name: string = 'Angular';
}
