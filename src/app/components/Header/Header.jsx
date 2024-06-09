"use client";
import React from "react";
import styles from "./header.module.scss";
import { crossIcon, hamburger } from "@/app/utils/iconExports";
import { handleSectionScroll } from "@/app/utils/services";
import HamburgerScreen from "../HamburgerScreen/HamburgerScreen";

const Header = ({ setToggleHam, toggleHam }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <a href="/" className={styles.logoContainer}>
          <img
            src={`${process.env.CLOUDINARY_URL}/v1717854754/UniConnect/uniconnect_logo_dark_xyc7ik.png`}
            alt="logo"
          />
        </a>
        <div
          onClick={() => setToggleHam(!toggleHam)}
          className={styles.hamburger}
        >
          {toggleHam ? crossIcon : hamburger}
        </div>
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
          {/* <div className={styles.login}>Login</div> */}
        </div>
      </div>
      {toggleHam && <HamburgerScreen setToggleHam={setToggleHam} />}
    </div>
  );
};

export default Header;
