import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';
import { Project } from 'src/app/models/project.model';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor(private portfolioservice: PortfolioService) { }

  ngOnInit(): void {
    this.getProjects();
  }


  getProjects(): void {
    this.portfolioservice.getProjects().subscribe(res => {
      this.projects = res;
      this.initCarousel();
    });
  }

  initCarousel(): void {
    setTimeout(() => {
      const carousel = document.querySelectorAll('.carousel');
      M.Carousel.init(carousel, {
        fullWidth: true,
        indicators: true,
      });
    });
  }
}

