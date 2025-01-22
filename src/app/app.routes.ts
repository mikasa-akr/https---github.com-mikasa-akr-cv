import { Routes } from '@angular/router';
import { CompetenceComponent } from './competence/competence.component';
import { ExperienceComponent } from './experience/experience.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: ' ', component: AppComponent},
  { path: 'competence',loadComponent: () =>import('./competence/competence.component').then((c) => c.CompetenceComponent),},
  { path: 'resum', component: ExperienceComponent }
];
