import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SubrouteComponent } from './subroute/subroute.component';

import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './navbar/navbar.component';
import { WorkshopsListComponent } from './workshops-list/workshops-list.component';
import { WorkshopFilterComponent } from './workshop-filter/workshop-filter.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DropdownComponent } from './dropdown-menu/dropdown-menu.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { WorkshopDetailsComponent } from './workshop-details/workshop-details.component';
import { WorkshopRepository } from './services/workshops/workshopRepository';

@NgModule({
  declarations: [
    AppComponent,
    SubrouteComponent,
    HomeComponent,
    NavComponent,
    DropdownComponent,
    DatePickerComponent,
    WorkshopFilterComponent,
    WorkshopsListComponent,
    WorkshopsComponent,
    ContactUsComponent,
    WorkshopDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [WorkshopRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
