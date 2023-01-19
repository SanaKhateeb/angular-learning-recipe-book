import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Falafel Test', 'mmmm protein and cheap', 'https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-1.jpg'),
    new Recipe('Falafel Test', 'mmmm protein and cheap', 'https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-1.jpg')
  ];

}
