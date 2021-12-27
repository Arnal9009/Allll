// components | props
import React from 'react'
import { Htag } from '../Htag/Htag'

// scss
import styles from './Opening.module.scss'


// react icons
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
        <span className={styles.opening_orange}>your opinion is important to us</span> 
        <h2 className={styles.opening_dicover}>Ration</h2>
        <p className={styles.logoname}>Ration</p>
        <span>We will help you find the best place in the city</span>
        <p>
          Scroll down
          <BsArrowDown fill="white" size={30}/>
        </p>
        
      </div>
      {/* <Htag tag='kitchen_name_w'>fast-food</Htag>
      <Htag tag='kitchen_name_d'>fast-food</Htag> */}
    </div>
  )
}

export default Opening
