import { ElementInfoService } from './element-info.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementInfo } from './element-info';

@Component({
  selector: 'app-element-component',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss'],
})
export class ElementComponent {
  elementInfo: ElementInfo | undefined;

  get element() {
    return this.route.snapshot.paramMap.get('element');
  }

  get backgroundImage() {
    return '';
  }

  constructor(
    private route: ActivatedRoute,
    private elementInfoService: ElementInfoService
  ) {
    route.params.subscribe((val) => {
      this.elementInfoService
        .getElementInfo(this.element ?? 'air')
        .subscribe({ next: (elementInfo) => (this.elementInfo = elementInfo) });
    });
  }
}
