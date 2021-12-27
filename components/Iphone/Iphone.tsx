import React from 'react'

import styles from "./Iphone.module.scss"

const Iphone = () => {
  return (
    <div className={styles.iphone}>
      <img src="https://i.ibb.co/Q97ZbSD/iphone.png" alt="" />
      <div>
        <p>Download our app on playmarket and appstore.</p>
        <div className={styles.icons}>
          <img src="https://i.ibb.co/L06qpH9/playmarket.png" alt="" />
          <img src="https://i.ibb.co/hyrY1cV/appstore.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Iphone
