import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ElementComponent } from './element.component';

@NgModule({
  declarations: [ElementComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'elements/:element', component: ElementComponent },
    ]),
  ],
})
export class ElementsModule {}
