import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    { name: 'Apples', amount: 7 },
    { name: 'Banana', amount: 10 }
  ];

  constructor() {}

  ngOnInit() {}
}
