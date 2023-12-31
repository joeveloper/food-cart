import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Burger',
        price: 10,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['burger', 'fast-food'],
        favourite: true,
        origins: ['american'],
        cookingTime: '30 min',
        stars: 4
      },
      {
        id: 2,
        name: 'Pizza',
        price: 15,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['pizza', 'fast-food'],
        favourite: true,
        origins: ['italian'],
        cookingTime: '30 min',
        stars: 4
      },
      {
        id: 3,
        name: 'Fries',
        price: 5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['fries', 'fast-food'],
        favourite: false,
        origins: ['american'],
        cookingTime: '30 min',
        stars: 4
      },
      {
        id: 4,
        name: 'Donuts',
        price: 5,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['donuts', 'fast-food'],
        favourite: false,
        origins: ['american'],
        cookingTime: '30 min',
        stars: 4
      },
      {
        id: 5,
        name: 'Tacos',
        price: 5,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['tacos', 'fast-food'],
        favourite: false,
        origins: ['mexican'],
        cookingTime: '30 min',
        stars: 4
      },
      {
        id: 6,
        name: 'Sandwich',
        price: 5,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['sandwich', 'fast-food'],
        favourite: false,
        origins: ['american'],
        cookingTime: '30 min',
        stars: 4
      }
    ]
  }
}




// return [
//   '/assets/images/foods/food-1.jpg',
//   '/assets/images/foods/food-2.jpg',
//   '/assets/images/foods/food-3.jpg',
//   '/assets/images/foods/food-4.jpg',
//   '/assets/images/foods/food-5.jpg',
//   '/assets/images/foods/food-6.jpg',
// ]