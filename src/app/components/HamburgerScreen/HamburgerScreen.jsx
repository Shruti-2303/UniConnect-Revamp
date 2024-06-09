import React from "react";
import styles from "./hamburgerScreen.module.scss";
import { crossIcon } from "@/app/utils/iconExports";
import { handleSectionScroll } from "@/app/utils/services";
const HamburgerScreen = ({ setToggleHam }) => {
  return (
    <div className={styles.hamburgerScreen}>
      <div className={styles.linksContainer}>
        <div
          className={styles.whyToAttend}
          onClick={() => {
            handleSectionScroll("whyToAttend");
            setToggleHam(false);
          }}
        >
          {" "}
          Why Attend
        </div>
        <div
          className={styles.howToAttend}
          onClick={() => {
            setToggleHam(false);
            handleSectionScroll("howToAttend");
          }}
        >
          How to Attend
        </div>
        <div
          className={styles.faqs}
          onClick={() => {
            setToggleHam(false);
            handleSectionScroll("faqs");
          }}
        >
          FAQs
        </div>
        {/* <div className={styles.login}>Login</div> */}
      </div>
    </div>
  );
};

export default HamburgerScreen;
