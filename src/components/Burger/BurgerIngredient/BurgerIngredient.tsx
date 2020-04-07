import React from "react";

import classes from "./BurgerIngredient.module.css";

export enum Ingredient {
  BACON = "Bacon",
  BREAD_BOTTOM = "BreadBottom",
  BREAD_TOP = "BreadTop",
  CHEESE = "Cheese",
  MEAT = "Meat",
  SALAD = "Salad",
}

export type EditableIngredient =
  | typeof Ingredient.BACON
  | typeof Ingredient.CHEESE
  | typeof Ingredient.MEAT
  | typeof Ingredient.SALAD;

type TIngredient = {
  ingredient: Ingredient;
};

export const BurgerIngredient = ({ ingredient }: TIngredient) => {
  switch (ingredient) {
    case Ingredient.BREAD_TOP:
      return (
        <div className={classes[ingredient]}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
    default:
      return <div className={classes[ingredient]} />;
  }
};
