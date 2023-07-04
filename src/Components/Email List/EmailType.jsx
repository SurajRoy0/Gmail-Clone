import React, { useState } from "react";
import styles from "./EmailType.module.css";
import { Inbox, LocalOffer, People } from "@material-ui/icons";
const EmailType = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className={styles["email-type"]}>
      <div
        className={
          styles["email-type__option"] +
          " " +
          (isActive && styles["email-type__option--active"])
        }
      >
        <Inbox />
        <p>Primary</p>
      </div>
      <div className={styles["email-type__option"]}>
        <People />
        <p>Social</p>
      </div>
      <div className={styles["email-type__option"]}>
        <LocalOffer />
        <p>Promotions</p>
      </div>
    </div>
  );
};

export default EmailType;
