import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarsRatingComponent } from './stars-rating/stars-rating.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [StarsRatingComponent, ConvertToSpacesPipe],
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    StarsRatingComponent,
    ConvertToSpacesPipe,
    CardModule,
    DividerModule,
  ],
})
export class SharedModule {}
