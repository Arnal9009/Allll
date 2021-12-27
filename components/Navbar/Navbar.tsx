import React, { useState } from 'react'

import styles from "./Navbar.module.scss"

import { BiMenuAltRight } from 'react-icons/bi'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Navbar = () => {
  const [sideBar, seSideBar] = useState(false)
  return (
    <div className={styles.burger}>
      <BiMenuAltRight fill='white' onClick={() => seSideBar(!sideBar)}>изменить</BiMenuAltRight>
      {
        sideBar ? <div className={styles.sideBar}>
          <HiArrowNarrowRight fill='white' onClick={() => seSideBar(!sideBar)}/>
          <ul>
            <li>Places</li>
            <li>About us</li>
            <li>Log in</li>
            <li>Search</li>
          </ul>
        </div> : null
      }
    </div>
  )
}

export default Navbar
// size={50}