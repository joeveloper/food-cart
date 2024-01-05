import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from '../../service/food/food.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, NgFor, NgIf],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  
  constructor(private route: ActivatedRoute, private foodService: FoodService) {
    route.params.subscribe(params => {
      if (params['id'])
      this.food = foodService.getFoodById(params['id']);
    }
   )}

  ngOnInit(): void {

  }

}
