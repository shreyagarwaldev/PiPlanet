import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { WorkshopDetailsComponent } from './workshop-details/workshop-details.component'


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workshops', component: WorkshopsComponent },
  { path: 'details', component: WorkshopDetailsComponent }
];