import { Component } from '@angular/core';

import { WorkExperience } from 'src/app/models/work-experience.model';

@Component({
    selector: 'app-work-experience',
    templateUrl: './work-experience.component.html',
    styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
    workExperience: WorkExperience[] = [
        {
            startDate: 'January 25, 2021',
            endDate: 'Present',
            position: 'Front-End Web Developer & UI/UX Designer',
            company: 'Cloud Panda PH (Full Time)',
            companyWebsite: 'https://cloudpanda.ph/',
            jobDescriptions: [
                'Optimize applications for maximum speed, scalability and accessibility.',
                'Designed and developed responsive website using CodeIgniter, HTML, SCSS, Bootstrap and JavaScript.',
                'Propose and implement new tools, best practices and standards.',
                'Developed responsive email templates.',
                'Use of Jira and Confluence to keep work status and technical documentation updated.',
                'Presented prototypes and concept designs using Figma.',
                `Fidelity checking of latest test environment to assess the product's quality in terms of UI/UX design.`,
                'Edited graphics using Photoshop for websites.',
                'Collaborated efectively with Business Analysts, Developers, and QA.',
            ],
        },
        {
            startDate: 'June 28, 2022',
            endDate: 'Present',
            position: 'Web3 Front-End Web Developer & UI/UX Designer',
            company: 'The QuestHub (Part-Time)',
            companyWebsite: 'https://thequesthub.io/',
            jobDescriptions: [
                'Build reusable code and libraries for future use.',
                'Optimize applications for maximum speed, scalability and accessibility.',
                'Propose and implement new tools, best practices and standards.',
                'Designed and developed responsive website using Svelte, HTML, CSS, Tailwind, DaisyUI and JavaScript.',
                'Presented prototypes and concept designs using Figma.',
                'Edited graphics using Photoshop for websites.',
                'Daily and weekly progress report based on assigned tasks.',
            ],
        },
    ];
}
