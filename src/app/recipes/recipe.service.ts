import { Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'A Simple Test',
      'https://reluctantentertainer.com/wp-content/uploads/2019/02/Easy-Homemade-Chili-Recipe-6.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Another Test Recipe',
      'A Simple Test',
      'https://reluctantentertainer.com/wp-content/uploads/2019/02/Easy-Homemade-Chili-Recipe-6.jpg',
      [
        new Ingredient('Buns', 4),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipes(index: number){
    return this.recipes.slice()[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
