import React from "react";
import styles from "./EmailListSetting.module.css";
import { IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  CheckBoxOutlineBlank,
  ChevronLeft,
  ChevronRight,
  MoreVert,
  Refresh,
} from "@material-ui/icons";
const EmailListSetting = () => {
  return (
    <div className={styles["email-list__setting"]}>
      <div className={styles["email-list__setting-left"]}>
        <IconButton>
          <CheckBoxOutlineBlank />
        </IconButton>
        <IconButton>
          <ArrowDropDown />
        </IconButton>
        <IconButton>
          <Refresh />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
      <div className={styles["email-list__setting-right"]}>
        <p>1-50 of 10,222</p>
        <IconButton>
          <ChevronLeft />
        </IconButton>
        <IconButton>
          <ChevronRight />
        </IconButton>
      </div>
    </div>
  );
};

export default EmailListSetting;
