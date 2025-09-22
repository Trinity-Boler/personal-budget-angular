import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Hero } from './hero/hero';
import { Footer } from './footer/footer';
import { Article } from './article/article';
import { Homepage } from './homepage/homepage';
import { routes } from './app.routes';

@Component({
  selector: 'pb-root',
  imports: [RouterOutlet, Menu,Hero,Footer,Article,Homepage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('personal-budget');
}
