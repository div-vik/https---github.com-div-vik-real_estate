import React from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.css";
import { BsHouseDoor } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to="/" className={classes.left}>
          <BsHouseDoor /> Real Estate_
        </Link>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Featured</li>
          <li className={classes.listItem}>Contacts</li>
        </ul>
        <div className={classes.right}>
          <Link to="/signin">Sign in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
