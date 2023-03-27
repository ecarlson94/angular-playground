import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './products-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { productGuard } from './product-detail.guard';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        component: ProductDetailsComponent,
        canActivate: [productGuard],
      },
    ]),
  ],
})
export class ProductsModule {}
