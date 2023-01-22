import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    ngOnInit(): void {
        const nav = document.getElementById('navbar');
        const menuText = document.querySelectorAll('.menu-text');
        const menuIcon = document.getElementById('menuIcon');
        this.mobileNav = document.getElementById('mobileNav');
        this.overlay = document.getElementById('overlay');

        if (nav && menuIcon) {
            const navTransition = () => {
                if (window.scrollY <= 635) {
                    nav.classList.remove('bg-white', 'text-secondary');
                    menuIcon.classList.remove('!stroke-black');
                    menuText.forEach(element => {
                        element.classList.add('after:bg-white');
                        element.classList.remove('!text-secondary');
                        element.classList.remove('after:bg-primary');
                    });
                } else {
                    nav.classList.add('bg-white', 'text-secondary');
                    menuIcon.classList.add('!stroke-black');
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

    mobileNav: any;
    overlay: any;

    openNav(): void {
        if (this.mobileNav) {
            this.mobileNav.style.marginRight = '0';
            this.overlay.style.display = 'block';
        }
    }
}
