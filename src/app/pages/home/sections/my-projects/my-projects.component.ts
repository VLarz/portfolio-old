import { Component } from '@angular/core';
import { MyProjects } from 'src/app/models/my-projects.model';

@Component({
    selector: 'app-my-projects',
    templateUrl: './my-projects.component.html',
    styleUrls: ['./my-projects.component.scss'],
})
export class MyProjectsComponent {
    myProjects: MyProjects[] = [
        {
            image: 'thequesthub-v2.png',
            title: 'TheQuestHub v2',
            links: [
                {
                    url: 'https://thequesthub.io/',
                    text: 'Visit Website',
                },
                {
                    url: 'https://www.figma.com/file/BrKlrTMWKxKGJVv3tCPjXp/TheQuestHub-v2?node-id=1%3A4&t=DJa0VcBIwqrlhags-1',
                    text: 'Visit Figma',
                },
            ],
            imagePosition: 'object-bottom',
        },
        {
            image: 'thequesthub-v1.png',
            title: 'TheQuestHub v1',
            links: [
                {
                    url: 'https://www.figma.com/file/VnBTVohMjE7WwabeAfB77d/TheQuestHub?node-id=0%3A1&t=gm92vv7x5LFOd2sx-1',
                    text: 'Visit Figma',
                },
            ],
            imagePosition: 'object-center',
        },
        {
            image: 'quest-citizens.png',
            title: 'Quest: Citizens',
            links: [
                {
                    url: 'https://citizens.thequesthub.io/',
                    text: 'Visit Website',
                },
            ],
            imagePosition: 'object-bottom',
        },
        {
            image: 'miss-universe-ph.jpg',
            title: 'Miss Universe PH',
            imagePosition: 'object-bottom',
        },
        {
            image: 'cloud-panda.png',
            title: 'Cloud Panda PH',
            links: [
                {
                    url: 'https://cloudpanda.ph/',
                    text: 'Visit Website',
                },
                {
                    url: 'https://www.figma.com/file/fRWuBsFWmG4P8fDsqd12vU/Cloud-Panda-Website?node-id=0%3A1&t=SUvpfcVpGwntfywH-1',
                    text: 'Visit Figma',
                },
            ],
            imagePosition: 'object-bottom',
        },
        {
            image: 'toktoksuper.png',
            title: 'toktok',
            links: [
                {
                    url: 'https://toktok.ph/',
                    text: 'Visit Website',
                },
                {
                    url: 'https://www.figma.com/file/UsmhBDIK2sFzzJpRzByjRL/toktoksuper-Website?node-id=0%3A1&t=jAlrJDRVZMcLOsJI-1',
                    text: 'Visit Figma',
                },
            ],
            imagePosition: 'object-center',
        },
        {
            image: 'coffee-life.png',
            title: 'coffee:life',
            links: [
                {
                    url: 'https://coffeelife.ph/',
                    text: 'Visit Website',
                },
                {
                    url: 'https://www.figma.com/file/LVf08ixx7AReDOX75YESSD/Coffee-Life-Website?node-id=0%3A1&t=rFPhKBdewNUFQoY4-1',
                    text: 'Visit Figma',
                },
            ],
            imagePosition: 'object-center',
        },
        {
            image: 'toktokmall.png',
            title: 'toktokmall',
            links: [
                {
                    url: 'https://toktokmall.ph/',
                    text: 'Visit Website',
                },
                {
                    url: 'https://www.figma.com/file/yU3uAQJrORAb0fdjisrHHp/toktokmall-web?node-id=1%3A147&t=hCohsonPJcxbHAJE-1',
                    text: 'Visit Figma',
                },
            ],
            imagePosition: 'object-center',
        },
        {
            image: 'toktokwallet.png',
            title: 'toktokwallet',
            links: [
                {
                    url: 'https://wallet.toktok.ph/',
                    text: 'Visit Website',
                },
                {
                    url: 'https://www.figma.com/file/F8pniqNOskEKk7FRCOAcZz/toktokwallet-Website?node-id=0%3A1&t=DKlaGN54H3ii4QmW-1',
                    text: 'Visit Figma',
                },
            ],
            imagePosition: 'object-center',
        },
        {
            image: 'toktokfood.png',
            title: 'toktokfood',
            links: [
                {
                    url: 'https://toktokfood.ph/',
                    text: 'Visit Website',
                },
            ],
            imagePosition: 'object-center',
        },
        {
            image: 'toktokdelivery.png',
            title: 'toktokdelivery',
            links: [
                {
                    url: 'https://toktok.ph/book/home',
                    text: 'Visit Website',
                },
            ],
            imagePosition: 'object-bottom',
        },
        {
            image: 'ninja-ph.png',
            title: 'Ninja PH',
            links: [
                {
                    url: 'https://ninjaph.com/',
                    text: 'Visit Website',
                },
            ],
            imagePosition: 'object-bottom',
        },
        {
            image: 'hof.png',
            title: 'House of Franchise',
            imagePosition: 'object-center',
        },
        {
            image: 'toktokgo.png',
            title: 'toktokgo',
            links: [
                {
                    url: 'https://go.toktok.ph/',
                    text: 'Visit Website',
                },
                {
                    url: 'https://www.figma.com/file/1PW9nT1pB3LqaFNdGUt3JU/toktokgo-Website?node-id=0%3A1&t=ErQ8y2e0aHeg17B5-1',
                    text: 'Visit Figma',
                },
            ],
            imagePosition: 'object-top',
        },
        {
            image: 'jc-cares.png',
            title: 'JC Cares Foundation',
            links: [
                {
                    url: 'https://jccaresfoundation.ph/',
                    text: 'Visit Website',
                },
            ],
            imagePosition: 'object-top',
        },
        {
            image: 'nutshell.png',
            title: 'Nutshell',
            links: [
                {
                    url: 'https://nutshell.ph/',
                    text: 'Visit Website',
                },
                {
                    url: 'https://www.figma.com/file/me0z4wephBBGY0TL92qY5f/Nutshell-Website?node-id=101%3A834&t=OcErJOEQeysRI4jV-1',
                    text: 'Visit Figma',
                },
            ],
            imagePosition: 'object-center',
        },
        {
            image: 'siomai-king.png',
            title: 'Siomai King',
            links: [
                {
                    url: 'https://siomaiking.ph/',
                    text: 'Visit Website',
                },
            ],
            imagePosition: 'object-top',
        },
        {
            image: 'yogorino.png',
            title: 'Yogorino',
            links: [
                {
                    url: 'https://www.figma.com/file/ZSznyPbEnfHsuGMFLyeTzJ/yogorino?node-id=0%3A1&t=YmZKyEdcm9h29A4V-1',
                    text: 'Visit Figma',
                },
            ],
            imagePosition: 'object-top',
        },
    ];

    showLimit: number = 6;
    showAllProjects(): void {
        this.showLimit = this.myProjects.length;
    }
}
