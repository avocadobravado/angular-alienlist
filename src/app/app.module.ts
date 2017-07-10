import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CasualEncountersComponent } from './casual-encounters/casual-encounters.component';
import { PetsComponent } from './pets/pets.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CasualEncountersComponent,
    PetsComponent,
    ForSaleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
