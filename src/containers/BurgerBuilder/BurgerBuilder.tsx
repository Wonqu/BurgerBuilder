import React from "react";

import classes from "./BurgerBuilder.module.css";

import { Burger } from "../../components/Burger/Burger";
import {
  Ingredient,
  EditableIngredient,
} from "../../components/Burger/BurgerIngredient/BurgerIngredient";
import { BuildControls } from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  [Ingredient.BACON]: 5.6,
  [Ingredient.CHEESE]: 4.5,
  [Ingredient.MEAT]: 3.4,
  [Ingredient.SALAD]: 2.3,
};

export type TDisabled = {
  [k in EditableIngredient]: boolean;
};

export class BurgerBuilder extends React.Component {
  state = {
    ingredientValues: {
      [Ingredient.BACON]: 0,
      [Ingredient.CHEESE]: 0,
      [Ingredient.MEAT]: 0,
      [Ingredient.SALAD]: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (ingredient: EditableIngredient) => {
    const updatedIngredients = {
      ...this.state.ingredientValues,
      [ingredient]: this.state.ingredientValues[ingredient] + 1,
    };

    this.setState({
      ingredientValues: updatedIngredients,
      totalPrice: this.state.totalPrice + INGREDIENT_PRICES[ingredient],
    });
  };

  removeIngredientHandler = (ingredient: EditableIngredient) => {
    const valueChange = this.state.ingredientValues[ingredient] >= 1 ? 1 : 0;
    const priceChange = INGREDIENT_PRICES[ingredient] * valueChange;

    const updatedIngredients = {
      ...this.state.ingredientValues,
      [ingredient]: this.state.ingredientValues[ingredient] - valueChange,
    };

    this.setState({
      ingredientValues: updatedIngredients,
      totalPrice: this.state.totalPrice - priceChange,
    });
  };

  render() {
    const disabled = Object.keys(this.state.ingredientValues)
      .map((value, index, array) => value as EditableIngredient)
      .reduce((accumulator, element: EditableIngredient) => {
        return {
          ...accumulator,
          [element]: this.state.ingredientValues[element] === 0,
        };
      }, {}) as TDisabled;
    return (
      <React.Fragment>
        <Burger ingredientValues={this.state.ingredientValues} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabled}
          price={this.state.totalPrice}
        />
      </React.Fragment>
    );
  }
}
