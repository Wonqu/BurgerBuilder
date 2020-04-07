import React from "react";

import classes from "./Burger.module.css";

import {
  BurgerIngredient,
  Ingredient,
  EditableIngredient,
} from "./BurgerIngredient/BurgerIngredient";

type TIngredient = {
  ingredient: Ingredient;
  value: number;
};

type TBurger = {
  ingredientValues: {
    [k in EditableIngredient]: number;
  };
};

export const Burger = ({ ingredientValues }: TBurger) => {
  const ingredientsArray = Object.keys(ingredientValues)
    .map((item, index, array) => item as EditableIngredient)
    .map((item, index, array) =>
      [...Array(ingredientValues[item])].map((_, i) => (
        <BurgerIngredient key={item + i} ingredient={item} />
      ))
    )
    .reduce((accumulator, element) => {
      return accumulator.concat(element);
    }, []);

  const burgerChildren =
    ingredientsArray.length > 0 ? (
      ingredientsArray
    ) : (
      <p>Please start adding ingredients!</p>
    );

  return (
    <div className={classes.Burger}>
      <BurgerIngredient ingredient={Ingredient.BREAD_TOP} />
      {burgerChildren}
      <BurgerIngredient ingredient={Ingredient.BREAD_BOTTOM} />
    </div>
  );
};
