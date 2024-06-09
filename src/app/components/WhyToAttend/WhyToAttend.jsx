import React from "react";
import styles from "./whyToAttend.module.scss";
import ReasonCard from "./ReasonCard/ReasonCard";
import { whyToAttendData } from "@/app/utils/constants";

const WhyToAttend = () => {
  return (
    <div className={styles.whyToAttendContainer} id="whyToAttend">
      <div className={styles.whyToAttend}>
        <div className={styles.heading}>
          {" "}
          Why <span className={styles.headingBlue}>Attend?</span>{" "}
        </div>
        <div className={styles.whyToAttendContent}>
          {whyToAttendData.map((item, index) => (
            <ReasonCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyToAttend;
