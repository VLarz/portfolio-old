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
            image: 'cloud-panda.png',
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
            image: 'cloud-panda.png',
            title: 'TheQuestHub v1',
            links: [
                {
                    url: 'https://www.figma.com/file/VnBTVohMjE7WwabeAfB77d/TheQuestHub?node-id=0%3A1&t=gm92vv7x5LFOd2sx-1',
                    text: 'Visit Figma',
                },
            ],
            imagePosition: 'object-bottom',
        },
        {
            image: 'cloud-panda.png',
            title: 'Quest: Citizens',
            links: [
                {
                    url: 'https://cloudpanda.ph/',
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
            image: 'coppermask.png',
            title: 'CopperMask',
            links: [
                {
                    url: 'https://coppermask.ph/',
                    text: 'Visit Website',
                },
                {
                    url: 'https://www.figma.com/file/GuksEJW3TDCPgpnbf4gz6N/CopperMask-Website-Revamp?node-id=0%3A1&t=Qj4zWHtcSh8mTgoM-1',
                    text: 'Visit Figma',
                },
            ],
            imagePosition: 'object-center',
        },
    ];
}
