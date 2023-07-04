import React from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from "@material-ui/core";
import { ExpandMore, HelpOutline, Settings } from "@material-ui/icons";
import AppsIcon from "@material-ui/icons/Apps";

import logo from "../../Assets/gmail-logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["header__left"]}>
        <IconButton>
          <ReorderIcon />
        </IconButton>
        <img src={logo} alt="Gmail logo" />
      </div>
      <div className={styles["header__middle"]}>
        <div className={styles["search-mail"]}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search mails" />
          <IconButton>
            <ExpandMore />
          </IconButton>
        </div>
      </div>
      <div className={styles["header__right"]}>
        <IconButton>
          <HelpOutline />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXyOzKHsoAHGZVjCBBevzs3xCDSSZ3pmJVN1-TyCoZXJITgbDYIlIun9WfMJAOsPFDp0o&usqp=CAU" />
      </div>
    </div>
  );
};

export default Header;
