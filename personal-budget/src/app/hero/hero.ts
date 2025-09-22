import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'pb-hero',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive

  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

}
