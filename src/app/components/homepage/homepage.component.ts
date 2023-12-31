import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../service/food/food.service';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
import { Food } from '../../shared/models/Food';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  
  foods: Food[] = [];
  

  constructor(private foodService: FoodService) { }
  
  
  
  ngOnInit(): void {
   this.foods = this.foodService.getAll();
  }



}
