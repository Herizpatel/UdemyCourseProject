import { Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  public recipe: Recipe[] = [
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
    return this.recipe.slice();
  }

  getRecipes(index: number){
    return this.recipe[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipe.push(recipe);
    this.recipesChanged.next(this.recipe.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipe[index] = newRecipe;
    this.recipesChanged.next(this.recipe.slice());
  }

  deleteRecipe(index: number){
    this.recipe.slice(index, 1);
    this.recipesChanged.next(this.recipe.slice());
  }
}
