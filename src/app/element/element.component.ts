import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-element-component',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.sass'],
})
export class ElementComponent {
  get element() {
    return this.route.snapshot.paramMap.get('element');
  }

  constructor(private route: ActivatedRoute) {}
}
