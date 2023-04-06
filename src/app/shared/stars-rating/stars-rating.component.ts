import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.scss'],
})
export class StarsRatingComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 75;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    console.log('clicked');
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
