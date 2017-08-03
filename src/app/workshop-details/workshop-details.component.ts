import { Component, OnInit, ElementRef } from '@angular/core';
import { WorkshopRepository, IWorkshopDetails } from '../services/workshops/workshopRepository'

@Component({
    templateUrl: './workshop-details.component.html',
    styleUrls: ['./workshop-details.component.css']
})

export class WorkshopDetailsComponent {
    workshopDetails: any;
    tabs: any;
    private previousActiveTab: {
        content: HTMLElement,
        link: HTMLElement
    };

    private tabcontent: HTMLCollectionOf<HTMLElement>;
    private tabLinks: HTMLCollectionOf<HTMLElement>;

    constructor(
        private workshopRepository: WorkshopRepository,
        private elementRef: ElementRef) {
        this.workshopDetails = <any>{};
    }

    ngOnInit() {
        this.getWorkshopDetail();
        this.tabLinks = <HTMLCollectionOf<HTMLElement>>this.elementRef.nativeElement.querySelectorAll(".tablinks");
        this.tabcontent = <HTMLCollectionOf<HTMLElement>>this.elementRef.nativeElement.querySelectorAll(".tabcontent");
        this.initializeTabs();
    }

    getWorkshopDetail() {
        this.workshopRepository.getWorkshopDetails()
            .then(data => {
                this.workshopDetails = data;
                console.log(this.workshopDetails);
            });
    }

    initializeTabs() {
        var i;
        
        for (i = 0; i < this.tabcontent.length; i++) {
            this.tabcontent[i].style.display = "none";
        }
        for (i = 0; i < this.tabLinks.length; i++) {
            this.tabLinks[i].classList.remove("active");
        }
        this.previousActiveTab = {
            content: this.tabcontent[0],
            link: this.tabLinks[0]
        }
        this.openTabs(null, 0);
    }

    openTabs(evt: any, tabName: number) {
        if (evt !== null && this.previousActiveTab.content === this.tabcontent[tabName]) {
            return;
        }
        // Show the current tab, and add an "active" class to the button that opened the tab
        this.tabcontent[tabName].style.display = "block";
        this.tabLinks[tabName].classList.add("active");
        if (evt !== null) {
            this.previousActiveTab.content.style.display = "none";
            this.previousActiveTab.link.classList.remove("active");
        }

        this.previousActiveTab = {
            content: this.tabcontent[tabName],
            link: this.tabLinks[tabName]
        }
    }
}