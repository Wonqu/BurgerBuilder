import React from "react";

import classes from "./BuildControls.module.css";
import {
  Ingredient,
  EditableIngredient,
} from "../BurgerIngredient/BurgerIngredient";
import { BuildControl } from "./BuildControl/BuildControl";
import { TDisabled } from "../../../containers/BurgerBuilder/BurgerBuilder";

type TOnClick = (ingredient: EditableIngredient) => void;

type TBuildControls = {
  ingredientAdded: TOnClick;
  ingredientRemoved: TOnClick;
  disabled: TDisabled;
  price: number;
};

const ingredientControls = [
  Ingredient.BACON as EditableIngredient,
  Ingredient.CHEESE as EditableIngredient,
  Ingredient.MEAT as EditableIngredient,
  Ingredient.SALAD as EditableIngredient,
];

export const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price,
}: TBuildControls) => (
  <div className={classes.BuildControls}>
    <strong>Total price: ${price.toFixed(2)}</strong>
    {ingredientControls.map((item, index, array) => (
      <BuildControl
        key={item}
        ingredient={item}
        added={ingredientAdded}
        removed={ingredientRemoved}
        disabled={disabled[item]}
      />
    ))}
    <button className={classes.OrderButton}>Order now</button>
  </div>
);
