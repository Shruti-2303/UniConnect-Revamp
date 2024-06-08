import React from "react";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.text}>
        <div className={styles.title}>
          World's First & Largest Online
          <span className={styles.titleBlue}> University Fair Platform</span>
        </div>
        <div className={styles.subTitle}>
          Interact one on one with top university representatives, apply with
          one click and secure on-spot offers and scholarships
        </div>
        <div className={styles.mediaLogos}>
          <div>
            <img
              src={`${process.env.CLOUDINARY_URL}/v1717854753/UniConnect/bbc_media_brxtsv.png`}
              alt=""
            />
          </div>
          <div>
            <img
              src={`${process.env.CLOUDINARY_URL}/v1717854755/UniConnect/wsj_media_b2dxi8_l2vins.png`}
              alt=""
            />
          </div>
          <div>
            <img
              src={`${process.env.CLOUDINARY_URL}/v1717854760/UniConnect/voa_media_ieycp6_oy3yet.png`}
              alt=""
            />
          </div>
          <div>
            <img
              src={`${process.env.CLOUDINARY_URL}/v1717854753/UniConnect/forbes_media_mutya6_mlczlq.png`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img
          src={`${process.env.CLOUDINARY_URL}/v1717854754/UniConnect/hero_1_yvpquz_byvp8k.png`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
