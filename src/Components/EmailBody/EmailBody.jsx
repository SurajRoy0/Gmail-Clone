import React, { useEffect, useState } from "react";
import styles from "./EmailBody.module.css";
import EmailBodySetting from "./EmailBodySetting";
import { Avatar, IconButton } from "@material-ui/core";
import {
  LabelImportant,
  Launch,
  MoreVert,
  Print,
  Reply,
  Star,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectedEmailsHandler } from "../../firebase/HelperFunctions";
import { useParams } from "react-router-dom";

const EmailBody = () => {
  const [email, setEmail] = useState({});
  const user = useSelector((state) => state.auth.user);
  const param = useParams();
  const path = window.location.pathname;
  console.log(path);

  useEffect(() => {
    const fun = async () => {
      const res = await selectedEmailsHandler({
        id: param.emailId,
        emailAddress: user.email,
      });
      setEmail(res.data);
    };
    fun();
  }, []);

  return (
    <div className={styles["email-body"]}>
      <EmailBodySetting />
      <div className={styles["email-content"]}>
        <div className={styles["email-body__header"]}>
          <div className={styles["email-body__header-left"]}>
            <h4>{email?.subject}</h4>
            <IconButton>
              <LabelImportant />
            </IconButton>
          </div>
          <div className={styles["email-body__header-right"]}>
            <IconButton>
              <Print />
            </IconButton>
            <IconButton>
              <Launch />
            </IconButton>
          </div>
        </div>
        <div className={styles["email-body__bottom-header"]}>
          <div className={styles["email-body__bottom-header-left"]}>
            <IconButton>
              <Avatar src={email?.photoURL} />
            </IconButton>
            <h4>{email?.fromName}</h4>
            <p>{email?.from}</p>
          </div>
          <div className={styles["email-body__bottom-header-right"]}>
            <p>{email?.timeStamp}</p>
            <IconButton>
              <Star />
            </IconButton>
            <IconButton>
              <Reply />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className={styles.message}>
          <p>{email?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default EmailBody;
