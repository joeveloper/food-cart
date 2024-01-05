import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../service/food/food.service';
import { CurrencyPipe, NgFor } from '@angular/common';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { TagsComponent } from "../tags/tags.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [NgFor, CurrencyPipe, SearchComponent, TagsComponent]
})
export class HomepageComponent implements OnInit {
  
  foods: Food[] = [];
  
  constructor(private foodService: FoodService, private route: ActivatedRoute) { }
  
  
  
  ngOnInit(): void {
   this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAllFoodBySearch(params['searchTerm']);
      } else if (params['tag'] ) {
        this.foods = this.foodService.getAllFoodsByTag(params['tag'])
      }
        else {
        this.foods = this.foodService.getAll();
      }
   })
  }

}
