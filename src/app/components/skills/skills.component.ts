import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

import { Profile } from '../../models/profile.model';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];
  profile: Profile;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getSkills();
    this.getProfile();
  }

  getSkills(): void{
    this.portfolioService.getSkills().subscribe(res => this.skills = res);
  }

  getProfile(): void {
    this.portfolioService.getProfile().subscribe(res => this.profile = res);
  }

  getProfileUrl(name: string): string {
    if (this.profile) {
      return this.profile.links.find(x => x.name === name).url;
    }
  }
}
