import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Platform, IonTabBar, IonTabs } from '@ionic/angular';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.scss']
})
export class MainComponent {

    public showTabBar: boolean = true;

    private hideTabs: string[] = [
        "/deliveries/buy"
    ];

    constructor(private platform: Platform, private router: Router) {
        this.platform.ready().then(() => {
            this.router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
                this.showTabBar = this.isHideTabBarPage(event.url) ? false : true;
            });
        });
    }

    private isHideTabBarPage(url: string): boolean {
        return this.hideTabs.find(hideUrl => url.startsWith(hideUrl)) != null;
    }

}
