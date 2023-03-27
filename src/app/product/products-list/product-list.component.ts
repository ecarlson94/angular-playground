import { ProductService } from '../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  subscriptions: Subscription[] = [];

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List: ${message}`;
  }

  ngOnInit(): void {
    const sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.pageTitle = `Error: ${err}`),
    });
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
