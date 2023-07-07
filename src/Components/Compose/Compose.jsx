import React, { useState } from "react";
import styles from "./Compose.module.css";
import {
  Remove,
  Height,
  MoreVert,
  Delete,
  Close,
  Create,
  InsertEmoticon,
  PhonelinkLock,
  NoteAdd,
  Photo,
  ArrowDropDown,
  FormatColorText,
  AttachFile,
  Link,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { composeCloseHandler } from "../../features/MailSilece";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import {
  sendEmailHandler,
  sentRecordHandler,
} from "../../firebase/HelperFunctions";

const Compose = () => {
  const [to, setTo] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (to === "") {
      toast.error("Please Enter Email", {
        position: "top-right",
        theme: "colored",
      });
      return;
    }
    if (subject === "") {
      toast.error("Please Enter Subject", {
        position: "top-right",
        theme: "colored",
      });
      return;
    }
    const mail = {
      to,
      from: user?.email,
      fromName: user?.name,
      photoURL: user?.photoURL,
      subject,
      message,
      timestamp: new Date(),
    };
    const res = await sendEmailHandler({
      toEmail: to,
      mail: mail,
    });
    if (res.id) {
      const res = await sentRecordHandler({
        fromEmail: user.email,
        mail: mail,
      });
      if (res.id) {
        toast.success("Sent Successfully", {
          position: "top-right",
          theme: "colored",
        });
      } else {
        toast.error("Sending Failed!", {
          position: "top-right",
          theme: "colored",
        });
        console.error("Error adding document:", res);
      }
    } else {
      toast.error("Sending Failed!", {
        position: "top-right",
        theme: "colored",
      });
      console.error("Error adding document:", res);
    }

    setTo("");
    setsubject("");
    setMessage("");
  };

  return (
    <div className={styles.compose}>
      <ToastContainer />
      <div className={styles["compose-header"]}>
        <div className={styles["compose-header__left"]}>
          <span>New Message</span>
        </div>
        <div className={styles["compose-header__right"]}>
          <Remove />
          <Height />
          <Close onClick={() => dispatch(composeCloseHandler())} />
        </div>
      </div>
      <form onSubmit={formSubmitHandler}>
        <div className={styles["compose-body"]}>
          <div className={styles["compose-body__form"]}>
            <input
              type="email"
              placeholder="Recipients"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
            />
            <textarea
              name=""
              id=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className={styles["compose-footer"]}>
          <div className={styles["compose-footer__left"]}>
            <button type="submit">
              Send
              <ArrowDropDown />
            </button>
          </div>
          <div className={styles["compose-footer__right"]}>
            <FormatColorText />
            <AttachFile />
            <Link />
            <InsertEmoticon />
            <NoteAdd />
            <Photo />
            <PhonelinkLock />
            <Create />
            <Delete />
            <MoreVert />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
