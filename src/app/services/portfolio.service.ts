import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Profile } from '../models/profile.model';
import { Career } from '../models/career.model';
import { Education } from '../models/education.model';
import { Skill } from '../models/skill.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${environment.jsonPath}/profile.json`);
  }

  getCareers(): Observable<Career[]>{
    return this.http.get<Career[]>(`${environment.jsonPath}/careers.json`);
  }

  getEducations(): Observable<Education>{
    return this.http.get<Education>(`${environment.jsonPath}/educations.json`);
  }

  getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(`${environment.jsonPath}/skills.json`);
  }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(`${environment.jsonPath}/projects.json`);
  }
}
