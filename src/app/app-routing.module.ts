import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ResourcesComponent } from './resources/resources.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { ResourceComponent } from './resource/resource.component';
import { ProfileComponent } from './profile/profile.component';
import { SeverityComponent } from './severity/severity.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'resource/:id', component: ResourceComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'symptoms', component: SymptomsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'severity', component: SeverityComponent },
  { path: 'bookmarks', component: BookmarksComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
