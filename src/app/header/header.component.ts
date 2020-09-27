import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const parallax = document.querySelectorAll('.parallax');
    M.Parallax.init(parallax, null);

    const nav = document.getElementById('nav');

    const navTransition = () => {
      if (window.scrollY <= 660) {
        nav.classList.add('transparent');
        nav.classList.add('z-depth-0');
        nav.classList.remove('black');
      }
      else {
        nav.classList.add('black');
        nav.classList.remove('transparent');
        nav.classList.remove('z-depth-0');
      }
    };
    window.addEventListener('scroll', navTransition);
  }

}
