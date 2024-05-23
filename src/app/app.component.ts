import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Shared1Module } from './shared1/shared1.module';
import { BarComponent } from './bar/bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Shared1Module, BarComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-foo /> <- via ngmodule
    <app-bar /> <- standalone

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'v18-ngmodule';
}
