import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CasualEncountersComponent } from './casual-encounters/casual-encounters.component';
import { PetsComponent } from './pets/pets.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { Encounters1Component } from './encounters1/encounters1.component';
import { routing } from './app.routing';
import { Encounters2Component } from './encounters2/encounters2.component';
import { Pets1Component } from './pets1/pets1.component';
import { Pets2Component } from './pets2/pets2.component';
import { Forsale1Component } from './forsale1/forsale1.component';
import { Forsale2Component } from './forsale2/forsale2.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { ListingListComponent } from './listing-list/listing-list.component';
import { CategoryPipe } from './category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CasualEncountersComponent,
    PetsComponent,
    ForSaleComponent,
    Encounters1Component,
    Encounters2Component,
    Pets1Component,
    Pets2Component,
    Forsale1Component,
    Forsale2Component,
    NewListingComponent,
    ListingListComponent,
    CategoryPipe
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
