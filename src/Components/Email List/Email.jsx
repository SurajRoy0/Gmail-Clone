import React from "react";
import styles from "./Email.module.css";
import {
  CheckBoxOutlineBlank,
  LabelOutlined,
  StarBorder,
} from "@material-ui/icons";
const Email = ({ name, subject, message, time }) => {
  return (
    <div className={styles.email}>
      <div className={styles["email-left"]}>
        <CheckBoxOutlineBlank />
        <StarBorder />
        <LabelOutlined />
        <h4>{name}</h4>
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
    </div>
  );
};

export default Email;
