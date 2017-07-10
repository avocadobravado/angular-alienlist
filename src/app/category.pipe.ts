import {Pipe, PipeTransform} from '@angular/core';
import {Listing} from './listing.model';

@Pipe({
  name: "age",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Listing[], desiredCategory) {
    var output: Listing[] = [];

    if(desiredCategory === 1) {
      // for (var i = 0; i < input.length; i++) {
      //   if (input[i].age <= 2) {
      //     output.push(input[i]);
      //   }
        // Append info to Casual Encounters
      }
      return output;
  //   } else if (desiredAge === "matureAnimals") {
  //     for (var i = 0; i < input.length; i++) {
  //       if (input[i].age > 2) {
  //         output.push(input[i]);
  //       }
  //     }
  //     return output;
  //   } else {
  //     return input;
  //   }
  // }
  }
}
