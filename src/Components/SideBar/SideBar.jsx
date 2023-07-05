import React from "react";

import styles from "./SideBar.module.css";
import { Button } from "@material-ui/core";
import {
  Add,
  Delete,
  Drafts,
  ExpandMore,
  FindInPage,
  Inbox,
  Keyboard,
  Label,
  LabelImportant,
  Send,
  StarRate,
  Videocam,
  WatchLater,
} from "@material-ui/icons";
import SideBarOptions from "./SideBarOptions";
import { useDispatch } from "react-redux";
import { composeOpenHandler } from "../../features/MailSilece";

const SideBar = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.sidebar}>
      <Button
        onClick={() => dispatch(composeOpenHandler())}
        startIcon={<Add />}
        className={styles["compose__btn"]}
      >
        Compose
      </Button>
      <SideBarOptions Icon={Inbox} title="Inbox" number="225" isActive={true} />
      <SideBarOptions Icon={StarRate} title="Starred" number="225" />
      <SideBarOptions Icon={WatchLater} title="Snoozed" number="225" />
      <SideBarOptions Icon={LabelImportant} title="Important" number="225" />
      <SideBarOptions Icon={Send} title="Sent" number="225" />
      <SideBarOptions Icon={Drafts} title="Drafts" number="225" />
      <SideBarOptions Icon={Label} title="Category" number="225" />
      <SideBarOptions Icon={Delete} title="[Map]/Trash" number="225" />
      <SideBarOptions Icon={FindInPage} title="Documents" number="225" />
      <SideBarOptions Icon={ExpandMore} title="More" number="225" />
      <hr className={styles["horizontal-line"]} />
      <h3 className={styles["sidebar-options__heading"]}>Meet</h3>
      <SideBarOptions Icon={Videocam} title="New meeting" number="225" />
      <SideBarOptions Icon={Keyboard} title="Join a meeting" number="225" />
    </div>
  );
};

export default SideBar;
