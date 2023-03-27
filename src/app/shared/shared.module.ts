import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarsRatingComponent } from './stars-rating/stars-rating.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StarsRatingComponent, ConvertToSpacesPipe],
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    StarsRatingComponent,
    ConvertToSpacesPipe,
  ],
})
export class SharedModule {}
