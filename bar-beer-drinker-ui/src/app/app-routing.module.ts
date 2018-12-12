import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BarDetailsComponent } from './bar-details/bar-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersComponent } from './beers/beers.component';
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

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },
  {
    path: 'static',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },
  {
    path: 'welcome',
    pathMatch: 'full',
    component: WelcomeComponent

  },
  {
    path: 'bars',
    pathMatch: 'full',
    component: BarsComponent
  },
  {
    path: 'bars/:bars',
    pathMatch: 'full',
    component: BarDetailsComponent

  },
  {
    path: 'beers',
    pathMatch: 'full',
    component: BeersComponent

  },
  {
    path: 'beers/:beer',
    pathMatch: 'full',
    component: BeerDetailsComponent
  },
  {
    path: 'drinkers',
    pathMatch: 'full',
    component: DrinkersComponent
  },
  {
    path: 'drinkers/:drinker',
    pathMatch: 'full',
    component: DrinkerDetailsComponent
  },
  {
    path: 'bartenders',
    pathMatch: 'full',
    component: BartendersComponent
  },
  {
    path: 'bartenders/:bartender',
    pathMatch: 'full',
    component: BartenderDetailsComponent
  },
  {
    path: 'manufacturers',
    pathMatch: 'full',
    component: ManufacturersComponent
  },
  {
    path: 'manufacturers/:manufacturer',
    pathMatch: 'full',
    component: ManufacturerDetailsComponent
  },
  {
    path: 'modifications',
    pathMatch: 'full',
    component: ModificationsComponent
  },
  {
    path: 'modifications/:modification',
    pathMatch: 'full',
    component: ModificationDetailsComponent
  },
  {
    path: 'insight',
    pathMatch: 'full',
    component: InsightComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
