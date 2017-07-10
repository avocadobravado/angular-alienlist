import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CasualEncountersComponent } from './casual-encounters/casual-encounters.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { PetsComponent } from './pets/pets.component';

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
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
