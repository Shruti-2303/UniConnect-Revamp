"use client";

import React from "react";
import styles from "./header.module.scss";
import { handleSectionScroll } from "@/app/utils/services";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div id="contentContainer" className={styles.header}>
        <a className={styles.logoContainer} href="/">
          <img
            src={`${process.env.CLOUDINARY_URL}/v1717854754/UniConnect/uniconnect_logo_dark_xyc7ik.png`}
            alt="logo"
          />
        </a>
        <div className={styles.linksContainer}>
          <div
            className={styles.whyToAttend}
            onClick={() => handleSectionScroll("whyToAttend")}
          >
            {" "}
            Why Attend
          </div>
          <div
            className={styles.howToAttend}
            onClick={() => handleSectionScroll("howToAttend")}
          >
            How to Attend
          </div>
          <div
            className={styles.faqs}
            onClick={() => handleSectionScroll("faqs")}
          >
            FAQs
          </div>
          <div className={styles.login}>Login</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
