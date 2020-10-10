import { Component, OnInit } from '@angular/core';

import { Profile } from '../../models/profile.model';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.getProfile();
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
