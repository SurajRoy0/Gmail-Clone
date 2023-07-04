import React from "react";
import styles from "./SideBarOptions.module.css";
const SideBarOptions = ({ Icon, title, number, isActive }) => {
  return (
    <div
      className={
        styles["sidebar__options"] +
        " " +
        (isActive && styles["sidebar__options--active"])
      }
    >
      <Icon />
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  );
};

export default SideBarOptions;
