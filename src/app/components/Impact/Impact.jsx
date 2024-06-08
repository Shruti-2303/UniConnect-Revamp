import React from "react";
import styles from "./impact.module.scss";

const Impact = () => {
  return (
    <div className={styles.impactContainer}>
      <div className={styles.impact}>
        <div className={styles.heading}>
          Impact that
          <span className={styles.headingBlue}> Counts</span>
        </div>
        <div className={styles.impactCards}>
          <div className={styles.impactCard}>
            <div className={styles.impactImg}>
              <img
                src={`${process.env.CLOUDINARY_URL}/v1717854759/UniConnect/8_mhjeh0_zdceix.png`}
                alt=""
              />
            </div>
            <div className={styles.impactCount}>200,000+</div>
            <div className={styles.impactTitle}>Student Registrations</div>
          </div>
          <div className={styles.impactCard}>
            <div className={styles.impactImg}>
              <img
                src={`${process.env.CLOUDINARY_URL}/v1717854753/UniConnect/9_nfeqhp_pgihho.png`}
                alt=""
              />
            </div>
            <div className={styles.impactCount}>200+</div>
            <div className={styles.impactTitle}>Universities Participated</div>
          </div>
          <div className={styles.impactCard}>
            <div className={styles.impactImg}>
              <img
                src={`${process.env.CLOUDINARY_URL}/v1717854753/UniConnect/10_zichg0_wstyt5.png`}
                alt=""
              />
            </div>
            <div className={styles.impactCount}>100,000+</div>
            <div className={styles.impactTitle}>Interaction Minutes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
