import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-banner',
    templateUrl: './hero-banner.component.html',
    styleUrls: ['./hero-banner.component.scss'],
})
export class HeroBannerComponent {
    ngAfterViewInit(): void {
        function counter(id: string, start: number, end: number, duration: number): void {
            let obj: any = document.getElementById(id),
                current = start,
                range = end - start,
                increment = end > start ? 1 : -1,
                step = Math.abs(Math.floor(duration / range)),
                timer = setInterval(() => {
                    current += increment;
                    obj.textContent = current;
                    if (current == end) {
                        clearInterval(timer);
                    }
                }, step);
        }

        counter('projectCompleted', 0, 24, 1500);
    }
}
