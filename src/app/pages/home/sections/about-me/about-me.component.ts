import { Component } from '@angular/core';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
    getYearExperience() {
        let startDate: any = new Date('2021-01-25');
        let currentDate: any = new Date(new Date().valueOf() - startDate);
        let months: any = currentDate.getMonth() == 1 ? 'month' : 'months';
        let years: any = currentDate.toISOString().slice(0, 4) == 1 ? 'year' : 'years';
        return `${currentDate.toISOString().slice(0, 4) - 1970} ${years} ${currentDate.getMonth()} ${months}`;
    }

    getAge() {
        let startDate: any = new Date('1998-06-13');
        let currentDate: any = new Date(new Date().valueOf() - startDate);
        return `${currentDate.toISOString().slice(0, 4) - 1970} years old`;
    }
}
