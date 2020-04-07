import React from "react";

import classes from "./Backdrop.module.css";

type TBackdrop = {
  show: boolean;
};

export const Backdrop = ({ show }: TBackdrop) =>
  show ? <div className={classes.Backdrop}></div> : null;
