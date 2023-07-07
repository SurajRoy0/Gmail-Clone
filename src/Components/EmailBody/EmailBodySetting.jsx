import React from "react";
import { IconButton } from "@material-ui/core";
import {
  ArrowBack,
  ChevronLeft,
  ChevronRight,
  MoreVert,
  Refresh,
} from "@material-ui/icons";
import styles from "./EmailBodySetting.module.css";
import { useNavigate } from "react-router-dom";
const EmailBodySetting = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["email-body__setting"]}>
      <div className={styles["email-body__setting-left"]}>
        <div onClick={() => navigate("/")}>
          <IconButton>
            <ArrowBack />
          </IconButton>
        </div>
        <IconButton>
          <Refresh />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
      <div className={styles["email-body__setting-right"]}>
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

export default EmailBodySetting;
