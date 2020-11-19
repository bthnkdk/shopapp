import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { ProductRespository } from './product.repository';
import { CategoryRespository } from './category.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [RestService, ProductRespository, CategoryRespository],
})
export class ModelModule {}
