import React from "react";
import styles from "./SignIn.module.css";
import logo from "../../Assets/gmail-log.jpg";
import { authProvider, authentication } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { signIn } from "../../features/UserSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignInHandler = async () => {
    const { user } = await authentication.signInWithPopup(authProvider);
    if (user.email) {
      dispatch(
        signIn({
          userID: user.uid,
          name: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        })
      );
      navigate("/");
      console.log(user);
    } else {
      toast.error("Sign In Failed! Please Try Again...", {
        position: "top-right",
        theme: "colored",
      });
    }
  };
  return (
    <div className={styles.signin}>
      <ToastContainer />
      <div className={styles["signin-box"]}>
        <img src={logo} alt="Google Logo" />
        <button onClick={SignInHandler} className={styles["signin-btn"]}>
          Sign In With Gmail
        </button>
      </div>
    </div>
  );
};

export default SignIn;
