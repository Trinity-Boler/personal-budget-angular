import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Menu } from './menu/menu';
import { Hero } from './hero/hero';
import { Footer } from './footer/footer';
import { Homepage } from './homepage/homepage';





@Component({
  selector: 'pb-root',
  imports: [

    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Menu,
    Hero,
    Footer,
    Homepage,


  ],
providers:[],


  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('personal-budget');
}
