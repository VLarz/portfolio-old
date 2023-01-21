import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    ngOnInit(): void {
        const nav = document.getElementById('navbar');
        const menuText = document.querySelectorAll('.menu-text');

        if (nav) {
            const navTransition = () => {
                if (window.scrollY <= 635) {
                    nav.classList.remove('bg-white', 'text-secondary');
                    menuText.forEach(element => {
                        element.classList.add('after:bg-white');
                        element.classList.remove('!text-secondary');
                        element.classList.remove('after:bg-primary');
                    });
                } else {
                    nav.classList.add('bg-white', 'text-secondary');
                    menuText.forEach(element => {
                        element.classList.remove('after:bg-white');
                        element.classList.add('!text-secondary');
                        element.classList.add('after:bg-primary');
                    });
                }
            };
            window.addEventListener('scroll', navTransition);
        }
    }
}
