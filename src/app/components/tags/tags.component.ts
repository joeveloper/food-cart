import { Component, OnInit } from '@angular/core';
import { Tag } from '../../shared/models/Tags';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodService } from '../../service/food/food.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {

  tags: Tag[] = []

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.tags = this.foodService.getAllTags()
  }

}
