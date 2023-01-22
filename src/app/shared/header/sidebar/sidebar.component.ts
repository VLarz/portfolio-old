import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    ngOnInit(): void {
        this.overlay = document.getElementById('overlay');
        this.mobileNav = document.getElementById('mobileNav');
    }

    mobileNav: any;
    overlay: any;

    closeNav(): void {
        if (this.mobileNav) {
            this.overlay.style.display = 'none';
            this.mobileNav.style.marginRight = '-256px';
        }
    }
}
