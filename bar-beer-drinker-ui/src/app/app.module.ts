import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient } from '@angular/common/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersComponent } from './beers/beers.component';
import { FormsModule } from '@angular/forms';
import { InsightComponent } from './insight/insight.component';
import { BarsComponent } from './bars/bars.component';
import { DrinkersComponent } from './drinkers/drinkers.component';
import { BartendersComponent } from './bartenders/bartenders.component';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { DrinkerDetailsComponent } from './drinker-details/drinker-details.component';
import { ManufacturerDetailsComponent } from './manufacturer-details/manufacturer-details.component';
import { BartenderDetailsComponent } from './bartender-details/bartender-details.component';
import { ModificationsComponent } from './modifications/modifications.component';
import { ModificationDetailsComponent } from './modification-details/modification-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BarDetailsComponent,
    BeerDetailsComponent,
    BeersComponent,
    InsightComponent,
    BarsComponent,
    DrinkersComponent,
    BartendersComponent,
    ManufacturersComponent,
    DrinkerDetailsComponent,
    ManufacturerDetailsComponent,
    BartenderDetailsComponent,
    ModificationsComponent,
    ModificationDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
