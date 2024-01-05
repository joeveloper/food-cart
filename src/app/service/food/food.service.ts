import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tags';

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

  getAllFoodBySearch(searchTerm: string): Food[] {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm));
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All' ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTags(): Tag[] {
    return [
      {
        name: 'All',
        count: 14
      },
      {
        name: 'burger',
        count: 3
      },
      {
        name: 'pizza',
        count: 2
      },
      {
        name: 'fries',
        count: 3
      },
      {
        name: 'donuts',
        count: 2
      },
      {
        name: 'tacos',
        count: 2
      },
      {
        name: 'sandwich',
        count: 2
      }
    ]
  }
}
