import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel, {
      fullWidth: true,
      indicators: true,
    });
    
  }

}

