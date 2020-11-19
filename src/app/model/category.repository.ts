import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { RestService } from './rest.service';

@Injectable()
export class CategoryRespository implements OnInit {
  private categories: Category[] = [];

  constructor(private restService: RestService) {}

  ngOnInit() {
    this.restService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  getCategories(id: number): Category {
    return this.categories.find((s) => s.id === id);
  }
}
