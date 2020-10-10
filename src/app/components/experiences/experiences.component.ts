import { Component, OnInit } from '@angular/core';

import { Career } from '../../models/career.model';
import { Education } from '../../models/education.model';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  careers: Career[];
  education: Education;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getCareers();
    this.getEducations();
  }

  getCareers(): void {
    this.portfolioService.getCareers().subscribe(res => this.careers = res);
  }

  getEducations(): void {
    this.portfolioService.getEducations().subscribe(res => this.education = res);
  }

}
