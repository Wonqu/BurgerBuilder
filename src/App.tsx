import React from "react";

import classes from "./App.module.css";

import { Layout } from "./components/Layout/Layout";
import { Navbar } from "./components/Navbar/Navbar";
import { BurgerBuilder } from "./containers/BurgerBuilder/BurgerBuilder";

export const App = () => {
  return (
    <div className={classes.App}>
      <Layout
        navbar={<Navbar/>}
        sidebar={<div>Sidebar</div>}
        content={<BurgerBuilder/>}
        footer={<div>Footer</div>}
      />
    </div>
  );
};
