import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovielistComponent } from './movielist/movielist.component';
import { movies } from './movie.services';
import { HttpModule } from '@angular/http';
import {routes} from "./apps.routes";
import { LoginComponent } from './login/login.component';
import { DonComponent } from './don/don.component';
import { RouterModule } from '@angular/router';
import { NgModel, FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { filterpipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovielistComponent,
    LoginComponent,
    DonComponent,
    filterpipe
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routes,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
   

  ],
  providers: [movies],
  bootstrap: [AppComponent]
})
export class AppModule { }
