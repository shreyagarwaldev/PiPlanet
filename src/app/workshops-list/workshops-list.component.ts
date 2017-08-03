import { Component, OnInit, Input } from '@angular/core';
import { WorkshopRepository, IWorkshop } from '../services/workshops/workshopRepository'

@Component({
    selector: 'workshops-list',
    templateUrl: './workshops-list.component.html',
    styleUrls: ['./workshops-list.component.css']
})

export class WorkshopsListComponent {

@Input() path: string;
    workshops: IWorkshop[];

    constructor(private workshopRepository: WorkshopRepository) {
        this.workshops = [];
    }

    ngOnInit() {
        this.getWorkshopsData();
    }

    getWorkshopsData() {
        this.workshopRepository.getWorkshops(this.path)
            .then(data => {
                this.workshops = data;
            })
    }
}