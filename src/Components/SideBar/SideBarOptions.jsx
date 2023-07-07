import React from "react";
import styles from "./SideBarOptions.module.css";
import { NavLink } from "react-router-dom";
const SideBarOptions = ({ Icon, title, number, expandMoreHandler, pathTo }) => {
  return (
    <NavLink
      to={pathTo}
      className={({ isActive }) =>
        isActive
          ? `${styles["sidebar__options--active"]} ${styles["sidebar__options"]}`
          : styles["sidebar__options"]
      }
    >
      <Icon />
      <h4>{title}</h4>
      <p>{number}</p>
    </NavLink>
  );
};

export default SideBarOptions;
