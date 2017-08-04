import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

export interface IPhotographer {
    id?: string;
    firstName: string;
    lastName: string;
    profilePhoto?: string;
    websiteLink?: string;
    followers?: string;
    location?: ILocation;
    moreInformation?: string;
}

export interface ILocation {
    locationId?: string;
    city: string;
    state?: string;
    country?: string;
}

export interface ICategory {
    categoryId: string;
    name: string;
}

export interface IDateRange {
    startDate: Date;
    endDate: Date;
}

export interface IPrice {
    cost: number;
    costCurrency: string; 
}

export interface IWorkshop {
    workshopId: string;
    name: string
    location: ILocation;
    category: ICategory;
    dates: IDateRange;
    price: IPrice
    description: string;
    image: string;
}

export interface IWorkshopDetails {
    workshopId: string;
    name: string
    photographers: IPhotographer[];
    location: ILocation;
    category: ICategory;
    dates: IDateRange;
    price: IPrice
    description: IDescription;
    workshopLink: string;
    similarWorkshops?: string;
    headerImage: string;
    gallery: string[];
}

export interface IDescription {
    introduction: string;
    itinerary: Iitinerary[];
    addtionalInformation: string;
}

export interface Iitinerary {
    day: number;
    location: string;
    content: string;
}

@Injectable()
export class WorkshopRepository {

    constructor(private http: Http) {}

    getWorkshops(path: string) {
        return this.http.get(path)
                    .toPromise()
                    .then(res => <IWorkshop[]> res.json().data)
                    .then(data => { return data; });
    }

    getPhotographers() {

    }

    getWorkshopDetails(workshopId: string) {
        return this.http.get("http://localhost:4200/assets/ws-details.json")
                    .toPromise()
                    .then(res => <IWorkshopDetails> res.json().data)
                    .then(data => { return data; });
    }
}