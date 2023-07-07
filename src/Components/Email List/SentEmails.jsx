import React, { useEffect, useState } from "react";
import styles from "./SentEmails.module.css";
import EmailListSetting from "./EmailListSetting";
import SentEmail from "./SentEmail";
import { useSelector } from "react-redux";
import { sentBoxEmailsHandler } from "../../firebase/HelperFunctions";
const SentEmails = () => {
  const [emails, setEmails] = useState([]);

  const user = useSelector((state) => state.auth.user);
  const fun = async () => {
    const mails = await sentBoxEmailsHandler(user.email);
    setEmails(mails);
  };

  useEffect(() => {
    fun();
  }, []);
  return (
    <div className={styles["email-list"]}>
      <EmailListSetting />
      {emails.map(({ id, data }) => {
        let time = new Date(
          data.timestamp?.seconds * 1000
        ).toLocaleTimeString();
        return (
          <SentEmail
            key={id}
            userEmailOrName={data.to}
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

export default SentEmails;
