import React from "react";

import classes from "./Layout.module.css";

type TLayout = {
  navbar: React.ReactNode;
  sidebar: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
};

export const Layout = ({ navbar, sidebar, content, footer }: TLayout) => {
  return (
    <React.Fragment>
      <div className={classes.Sidebar}>{sidebar}</div>
      <nav className={classes.Navbar}>{navbar}</nav>
      <main className={classes.Content}>{content}</main>
      <div className={classes.Footer}>{footer}</div>
    </React.Fragment>
  );
};
