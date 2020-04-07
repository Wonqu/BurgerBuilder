import React from "react";

import classes from "./BuildControl.module.css";
import { EditableIngredient } from "../../BurgerIngredient/BurgerIngredient";

type TOnClick = (ingredient: EditableIngredient) => void;

type TBuildControl = {
  ingredient: EditableIngredient;
  added: TOnClick;
  removed: TOnClick;
  disabled: boolean;
};

export const BuildControl = ({
  ingredient,
  added,
  removed,
  disabled,
}: TBuildControl) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{ingredient}</div>
    <button
      className={classes.Less}
      onClick={() => removed(ingredient)}
      disabled={disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={() => added(ingredient)}>
      More
    </button>
  </div>
);
