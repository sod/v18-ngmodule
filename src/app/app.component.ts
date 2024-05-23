import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Shared1Module } from './shared1/shared1.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Shared1Module],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-foo />

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'v18-ngmodule';
}
