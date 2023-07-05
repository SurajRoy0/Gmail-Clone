import React, { useEffect, useState } from "react";
import styles from "./EmailList.module.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";
import Email from "./Email";
import { db } from "../../firebase/firebase";
const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  console.log(emails);

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
            name={data.to}
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
