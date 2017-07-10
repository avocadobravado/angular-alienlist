import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Listing } from '../listing.model';
import { AppComponent } from '../app.component';
import { NewListingComponent } from '../new-listing/new-listing.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
  masterListingList: Listing[] = [
  ];

  addListing(newListingFromChild: Listing) {
    this.masterListingList.push(newListingFromChild);
  }
}
