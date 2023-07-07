import React from "react";
import styles from "./SentEmail.module.css";
import {
  CheckBoxOutlineBlank,
  LabelOutlined,
  StarBorder,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
const Email = ({ userEmailOrName, subject, message, time, id }) => {
  return (
    <Link to={`/sent/${id}`} className={styles.email}>
      <div className={styles["email-left"]}>
        <CheckBoxOutlineBlank />
        <StarBorder />
        <LabelOutlined />
        <h4>{userEmailOrName}</h4>
      </div>
      <div className={styles["email-middle"]}>
        <div className={styles["email-middle__msg"]}>
          <p>
            <b>{subject}</b> {message}
          </p>
        </div>
      </div>
      <div className={styles["email-right"]}>
        <p>{time}</p>
      </div>
    </Link>
  );
};

export default Email;
