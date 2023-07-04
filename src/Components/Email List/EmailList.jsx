import React from "react";
import styles from "./EmailList.module.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";
import Email from "./Email";
const EmailList = () => {
  return (
    <div className={styles["email-list"]}>
      <EmailListSetting />
      <EmailType />

      <Email
        name="Suraj Roy"
        subject="This is subject"
        message="This is message"
        time="2:30 PM"
      />

      <Email
        name="Suraj Roy"
        subject="This is subject"
        message="This is message"
        time="2:30 PM"
      />
    </div>
  );
};

export default EmailList;
