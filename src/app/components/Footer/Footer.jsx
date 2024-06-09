"use client";
import React from "react";
import styles from "./footer.module.scss";
import { Divider } from "antd";
import {
  leverageLogo,
  messageIcon,
  phoneIcon,
  upArrow,
} from "@/app/utils/iconExports";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.footerUpper}>
          <div className={styles.branding}>
            <div className={styles.brandTitle}>From the house of</div>
            <a
              href="https://www.leverageedu.com/"
              target="_blank"
              className={styles.brandLogo}
            >
              {leverageLogo}
            </a>
            <div className={styles.brandTagline}>
              End-to-end support for your study abroad journey
            </div>
          </div>
          <div className={styles.connectUs}>
            <div className={styles.title}>Ask us anything on</div>

            <a href="mailto:hello@leverageedu.com" className={styles.contacts}>
              <div className={styles.contactsImg}>{messageIcon}</div>
              <div className={styles.contactsContent}>
                hello@leverageedu.com
              </div>
            </a>
            <a href="tel:1800-572-000" className={styles.contacts}>
              <div className={styles.contactsImg}>{phoneIcon}</div>
              <div className={styles.contactsContent}>1800-572-000</div>
            </a>
          </div>
          <div className={styles.socials}>
            <div className={styles.title}>Follow us</div>
            <div className={styles.logos}>
              <a href="https://www.facebook.com/LeverageEdu/" target="_blank">
                <img
                  src={`${process.env.CLOUDINARY_URL}/v1717930400/UniConnect/facebook_g2qdpm.svg`}
                  alt=""
                />
              </a>
              <a href="https://www.instagram.com/leverageedu/" target="_blank">
                <img
                  src={`${process.env.CLOUDINARY_URL}/v1717930400/UniConnect/instagram_z3sck7.svg`}
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/company/leverage-edu/mycompany/"
                target="_blank"
              >
                <img
                  src={`${process.env.CLOUDINARY_URL}/v1717930400/UniConnect/linkedin_st4pxo.svg`}
                  alt=""
                />
              </a>
              <a href="https://x.com/leverageedu" target="_blank">
                <img
                  src={`${process.env.CLOUDINARY_URL}/v1717931025/UniConnect/x_dgyr5c.svg`}
                  alt=""
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCGn54Lhkb_CjGMwA8HEzgTg?app=desktop"
                target="_blank"
              >
                <img
                  src={`${process.env.CLOUDINARY_URL}/v1717930400/UniConnect/youtube_oklcd7.svg`}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <Divider style={{ borderWidth: "1px", color: "lightgray" }} />
        <div className={styles.footerLower}>
          <div className={styles.copyright}>
            Copyright Ⓒ 2024, Leverage. All rights reserved.
          </div>
          <div onClick={scrollToTop} className={styles.backToTop}>
            Back to top {upArrow}
          </div>
          <div onClick={scrollToTop} className={styles.backToTopMobile}>
            {upArrow}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
