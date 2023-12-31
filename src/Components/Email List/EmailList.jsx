import React, { useEffect, useState } from "react";
import styles from "./EmailList.module.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";
import Email from "./Email";
import { db } from "../../firebase/firebase";
import { inboxEmailsHandler } from "../../firebase/HelperFunctions";
import { useSelector } from "react-redux";
const EmailList = () => {
  const [emails, setEmails] = useState([]);

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fun = async () => {
      const mails = await inboxEmailsHandler(user.email);
      setEmails(mails);
    };
    fun();
  }, []);

  return (
    <div className={styles["email-list"]}>
      <EmailListSetting />
      <EmailType />
      {emails.map(({ id, data }) => {
        let time = new Date(
          data.timestamp?.seconds * 1000
        ).toLocaleTimeString();
        return (
          <Email
            key={id}
            userEmailOrName={data.fromName}
            subject={data.subject}
            message={data.message}
            time={time}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default EmailList;
