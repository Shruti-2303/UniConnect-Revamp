"use client";
import React from "react";
import styles from "./faqs.module.scss";
import { Collapse } from "antd";
import { faqItems } from "@/app/utils/constants";

const Faqs = () => {
  return (
    <div className={styles.faqsContainer}>
      <div className={styles.faqs}>
        <div className={styles.heading}>
          <span className={styles.headingBlue}>FAQs</span>
        </div>
        <div className={styles.faqsCollapse}>
          <Collapse items={faqItems} defaultActiveKey={["1"]} accordion />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
