import React from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from "@material-ui/core";
import { ExpandMore, HelpOutline, Settings } from "@material-ui/icons";
import AppsIcon from "@material-ui/icons/Apps";

import logo from "../../Assets/gmail-logo.png";
import styles from "./Header.module.css";
import { signOut } from "../../features/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
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
        <Avatar src={user.photoURL} />
        <button onClick={() => dispatch(signOut())} className={styles.logout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
