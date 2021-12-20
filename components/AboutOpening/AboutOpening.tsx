// components | props
import React from 'react'
import { Htag } from '../Htag/Htag'

// scss
import styles from './AboutOpening.module.scss'


// react icons
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { BsArrowDown } from 'react-icons/bs'

const AboutOpening = () => {
  return (
    <div className={styles.opening}>
      <div className={styles.social_media}>
        <span>Follow us</span>
        <GrFacebookOption fill="white" size={30} className={styles.mb_20}/>
        <AiOutlineTwitter fill="white" size={30} className={styles.mb_20}/>
        <FiInstagram color="white" size={30} className={styles.mb_20}/>
      </div>
      <div className={styles.opening_main}>
        <h2 className={styles.opening_dicover}>About  us</h2>
        <span>The Ration is the best site for choosing places to eat</span>
        <p>
          Scroll down
          <BsArrowDown fill="white" size={30}/>
        </p>
      </div>
    </div>
  )
}

export default AboutOpening
