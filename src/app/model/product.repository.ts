import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { Product } from './product.model';
import { RestService } from './rest.service';

@Injectable()
export class ProductRespository implements OnInit {
  private products: Product[] = [];

  constructor(private restService: RestService) {
    this.restService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  ngOnInit() {}

  getProduct(id: number): Product {
    return this.products.find((s) => s.id === id);
  }

  getProducts(category: Category = null): Product[] {
    if(category)
      return this.products.filter((s) => s.category == category.name);
    else
     return this.products;
  }
}
