import { Component } from '@angular/core';
import { Product, Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];
  ngOnInit() {
    this.productsService
      .getProducts('http://localhost:3000/cloths', { page: 0, perPage: 5 })
      .subscribe((products: Products) => {
        this.products = products.items;
      });
  }
}
