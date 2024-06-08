import React from 'react'
import styles from "./reasonCard.module.scss"

const ReasonCard = ({item}) => {
  return (
    <div className={styles.whyToAttendCard}>
              <div className={styles.cardImg}>
                <img src={item.img} alt="" />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.cardDescription}>{item.description}</div>
              </div>
            </div>
  )
}

export default ReasonCard