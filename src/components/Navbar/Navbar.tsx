import React from 'react';

import classes from "./Navbar.module.css";

type TNavbar = {

}

export const Navbar = (props: TNavbar) => (
    <header className={classes.Header}>
        <div className={classes.Logo}>LOGO</div>
        <div className={classes.Menu}>Menu</div>
        <nav className={classes.Links}>LINKS</nav>
    </header>
);