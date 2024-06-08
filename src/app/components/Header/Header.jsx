import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div id="contentContainer" className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            src={`${process.env.CLOUDINARY_URL}/v1717854754/UniConnect/uniconnect_logo_dark_xyc7ik.png`}
            alt="logo"
          />
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.whyToAttend}> Why Attend</div>
          <div className={styles.howToAttend}>How to Attend</div>
          <div className={styles.faqs}>FAQs</div>
          <div className={styles.login}>Login</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
