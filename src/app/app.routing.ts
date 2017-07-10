import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CasualEncountersComponent } from './casual-encounters/casual-encounters.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { PetsComponent } from './pets/pets.component';
import { Encounters1Component } from './encounters1/encounters1.component';
import { Encounters2Component } from './encounters2/encounters2.component';
import { Pets1Component } from './pets1/pets1.component';
import { Pets2Component } from './pets2/pets2.component';
import { Forsale1Component } from './forsale1/forsale1.component';
import { Forsale2Component } from './forsale2/forsale2.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'casual-encounters',
    component: CasualEncountersComponent
  },
  {
    path: 'for-sale',
    component: ForSaleComponent
  },
  {
    path: 'pets',
    component: PetsComponent
  },
  {
    path: 'encounters1',
    component: Encounters1Component
  },
  {
    path: 'encounters2',
    component: Encounters2Component
  },
  {
    path: 'pets1',
    component: Pets1Component
  },
  {
    path: 'pets2',
    component: Pets2Component
  },
  {
    path: 'forsale1',
    component: Forsale1Component
  },
  {
    path: 'forsale2',
    component: Forsale2Component
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
