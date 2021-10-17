import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple a test',
      'https://img.taste.com.au/31kwj5qu/w643-h428-cfill-q90/taste/2018/10/slow-cooker-pork-belly-in-apricot-sauce-recipe-143088-2.jpg',
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
