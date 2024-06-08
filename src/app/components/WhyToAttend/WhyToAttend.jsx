import React from "react";
import styles from "./whyToAttend.module.scss";
import ReasonCard from "./ReasonCard/ReasonCard";

const WhyToAttend = () => {
  const data = [
    {
      img: `${process.env.CLOUDINARY_URL}/v1717854753/UniConnect/2_knepwr_tj07x8.png`,
      title: "Meet Top University Representatives",
      description:
        "Interact one on one with top university representatives and know about the campus and their course details, application process, and future career paths after the course",
    },
    {
      img: `${process.env.CLOUDINARY_URL}/v1717854753/UniConnect/1_qq1k2e_wleulq.png`,
      title: "Get On-Spot Offers",
      description:
        "Apply with one click inside the booth and secure on-spot offers from top universities",
    },
    {
      img: `${process.env.CLOUDINARY_URL}/v1717854758/UniConnect/4_qfxu6h_snx4ai.png`,
      title: "Application Guidance",
      description:
        "Get application assistance and guidance by top university representatives and Leverage Edu experts who will handhold you at every step",
    },
    {
      img: `${process.env.CLOUDINARY_URL}/v1717854753/UniConnect/3_reyvlh_y7klmm.png`,
      title: "Scholarship Guidance",
      description:
        "Find out how to qualify for generous scholarships and educational loans, in exclusive webinars and presentations",
    },
  ];
  return (
    <div className={styles.whyToAttendContainer}>
      <div className={styles.whyToAttend}>
        <div className={styles.heading}>
          {" "}
          Why <span className={styles.headingBlue}>Attend?</span>{" "}
        </div>
        <div className={styles.whyToAttendContent}>
          {data.map((item, index) => (
            <ReasonCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyToAttend;
