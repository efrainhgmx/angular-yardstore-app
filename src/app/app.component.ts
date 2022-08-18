import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yard-store';
  barProgress = 50;

  products: Product[] = [
    {
      name: 'Tea Cup',
      price: 7.50,
      image: '../assets/images/cup.webp'
    },
    {
      name: 'Large Desk for work',
      price: 150,
      image: '../assets/images/desk.webp'
    },
    {
      name: 'Glasses',
      price: 64.99,
      image: '../assets/images/glasses.webp'
    },
    {
      name: 'MacBook Pro M2',
      price: 1750,
      image: '../assets/images/macbook.webp'
    },
    {
      name: 'Red Wine',
      price: 147.99,
      image: '../assets/images/wine.webp'
    },
    {
      name: 'iPhone XS',
      price: 800,
      image: '../assets/images/phone.webp'
    },
  ]
}
