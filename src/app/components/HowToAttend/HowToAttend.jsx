import React from "react";
import styles from "./howToAttend.module.scss";

const HowToAttend = () => {
  return (
    <div className={styles.howToAttendContainer} id="howToAttend">
      <div className={styles.howToAttend}>
        <div className={styles.heading}>
          How to
          <span className={styles.headingBlue}> Attend?</span>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepImg}>
              <img
                src={`${process.env.CLOUDINARY_URL}/v1717854753/UniConnect/5_qsjojn_n84gti.png`}
                alt=""
              />
            </div>
            <div className={styles.stepTitle}>Step 1</div>
            <div className={styles.stepDesc}>
              Register for UniConnect by creating an account
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepImg}>
              <img
                src={`${process.env.CLOUDINARY_URL}/v1717854759/UniConnect/6_dcbamn_odqgiq.png`}
                alt=""
              />
            </div>
            <div className={styles.stepTitle}>Step 2</div>
            <div className={styles.stepDesc}>
              Complete your profile to view the recommended universities
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepImg}>
              <img
                src={`${process.env.CLOUDINARY_URL}/v1717854753/UniConnect/7_ywiw8a_sywsqx.png`}
                alt=""
              />
            </div>
            <div className={styles.stepTitle}>Step 3</div>
            <div className={styles.stepDesc}>
              Visit university booths and interact with university experts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToAttend;
