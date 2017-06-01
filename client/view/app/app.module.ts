import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from '../../components';
import { ItemsComponent, PlacesComponent, DashboardComponent } from '../';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'places', component: PlacesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    PlacesComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
