import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarsRatingComponent } from './stars-rating/stars-rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';

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
    ReactiveFormsModule,
    RadioButtonModule,
    ButtonModule,
  ],
})
export class SharedModule {}
