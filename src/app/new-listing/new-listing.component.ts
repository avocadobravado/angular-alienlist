import { Component, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { Listing } from '../listing.model';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent {
  @Output() clickSender = new EventEmitter();

  submitForm(title: string, image: string, category: string, description: string) {
    var newListingToAdd: Listing = new Listing(title, image, category, description);
    this.clickSender.emit(newListingToAdd);
    console.log(newListingToAdd);
  }
}
