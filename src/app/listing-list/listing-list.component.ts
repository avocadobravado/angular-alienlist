import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Listing } from '../listing.model';

@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.css']
})
export class ListingListComponent {
  @Input() childListingList: Listing[];
  @Output() clickSender = new EventEmitter();

}
