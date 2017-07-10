import { Component } from '@angular/core';
import { Listing } from './listing.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AlienList';

  // masterListingList: Listing[] = [
  // ];
  //
  // addListing(newListingFromChild: Listing) {
  //   this.masterListingList.push(newListingFromChild);
  //   // console.log(Listing);
  // }

}
