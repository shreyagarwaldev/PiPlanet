import { Component, Renderer } from '@angular/core';

@Component({
  selector: 'workshop-filter',
  templateUrl: './workshop-filter.component.html',
  styleUrls: ['./workshop-filter.component.css']
})

export class WorkshopFilterComponent {

  /** price filters */
  public minPrice: number = 0;
  public maxPrice: number = 80;
  private updatedPrice: number[];

  public locations: Array<string>;
  public photographers: any[];
  public cities: any[];
  public categories: any[];

  /** abels for filters */
  public cityDropdownLabel: string;
  public photographerDropdownLabel: string;
  public categoryDropdownLabel: string;
  public fromDateLabel: string;
  public toDateLabel: string;

  private checkboxElements: NodeListOf<Element>;

  /** date filters */
  public minFromDate: Date;
  public maxFromDate: Date;
  public minToDate: Date;
  public maxToDate: Date;
  public fromDate: Date;
  public toDate: Date;

  constructor() {
    this.cities = [];
    this.photographers = [];
    this.categories = [];

    this.getLocationList();
    this.getPhotographerList();
    this.getCategoryList();

    this.cityDropdownLabel = "Location";
    this.photographerDropdownLabel = "Photographer";
    this.categoryDropdownLabel = "Category";
    this.fromDateLabel = "From";
    this.toDateLabel = "To";

    this.minFromDate = new Date();
  }

  createFilterMaps() {

  }

  getFromDate(value: Date) {
    this.fromDate = value;
  }

  getToDate(value: Date) {
    this.toDate = value;
  }

  getPrice(values: number[]) {
    this.updatedPrice = values;
  }

  getSelectedFilters(inputName: string): string[] {
    let selected: string[] = [];
    this.checkboxElements = document.querySelectorAll(`input[name=${inputName}]:checked`);
    for (var i = 0; i < this.checkboxElements.length; i++) {
      var x = <HTMLInputElement>this.checkboxElements[i];
      selected.push(x.value);
    }

    return selected;
  }

  getResult() {
    let locations = this.getSelectedFilters('location');
    let photographers = this.getSelectedFilters('photographer');
    let categories = this.getSelectedFilters('categories');

    console.log(locations);
    console.log(photographers);
    console.log(categories);
    console.log(this.fromDate);
    console.log(this.toDate);
    console.log(this.updatedPrice);
  }

  private getLocationList() {
    this.cities.push({ label: 'New York', value: 'New York' });
    this.cities.push({ label: 'Rome', value: 'Rome' });
    this.cities.push({ label: 'London', value: 'London' });
    this.cities.push({ label: 'Istanbul', value: 'Istanbul' });
    this.cities.push({ label: 'Paris', value: 'Paris' });
  }

  private getPhotographerList() {
    this.photographers.push({ label: 'abc', value: 'abc' });
    this.photographers.push({ label: 'xyz', value: 'xyz' });
    this.photographers.push({ label: 'gdhd', value: 'gdhd' });
    this.photographers.push({ label: 'alsd', value: 'alsd' });
    this.photographers.push({ label: 'qte', value: 'qte' });
  }

  private getCategoryList() {
    this.categories.push({ label: 'travel', value: 'travel' });
    this.categories.push({ label: 'fashion', value: 'fashion' });
    this.categories.push({ label: 'cook', value: 'cook' });
    this.categories.push({ label: 'nature', value: 'nature' });
  }
}
