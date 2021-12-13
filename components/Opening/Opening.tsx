import React from 'react'

import styles from './Opening.module.scss'

import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { BsArrowDown } from 'react-icons/bs'

const Opening = () => {
  return (
    <div className={styles.opening}>
      <div className={styles.social_media}>
        <span>Follow us</span>
        <GrFacebookOption fill="white" size={30} className={styles.mb_20}/>
        <AiOutlineTwitter fill="white" size={30} className={styles.mb_20}/>
        <FiInstagram color="white" size={30} className={styles.mb_20}/>
      </div>
      <div className={styles.opening_main}>
        <span className={styles.opening_orange}>explore the Nature Beauty</span> 
        <h2 className={styles.opening_dicover}>Discover</h2>
        <span>Wonderful Indonesia</span>
        <p>
          Scroll down
          <BsArrowDown fill="white" size={30}/>
        </p>
      </div>
    </div>
  )
}

export default Opening
