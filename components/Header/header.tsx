import React from 'react'
import { Htag } from '../Htag/Htag'

import styles from './header.module.scss'


import Navbar from '../Navbar/Navbar'


const Header = () => {
  return (
    <header className={styles.header}>
      <Htag tag='logo_header_d'></Htag>
      <ul>
        {/* <li><span className={styles.hover}></span></li> */}
        <li><span className={styles.hover}>Places</span></li>
        <li><span>About us</span></li>
        <li><span>Log in</span></li>
      </ul>
      <div>
        <svg className={styles.lupa} width="38" height="35" viewBox="0 0 38 35" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.6238 28.5935L20.6481 20.2577C16.6552 22.8935 11.1531 22.2488 7.99068 18.7744C4.82825 15.3001 5.06046 10.1552 8.52487 6.93869C11.9884 3.7208 17.5297 3.50425 21.2722 6.44055C25.0146 9.37684 25.7094 14.4862 22.8704 18.1941L31.8462 26.5299L29.6254 28.592L29.6238 28.5935ZM15.1872 7.29159C12.2089 7.29097 9.63949 9.23218 9.03448 11.94C8.42947 14.6477 9.9552 17.3778 12.6879 18.4774C15.4207 19.5769 18.6093 18.7437 20.3233 16.4821C22.0374 14.2205 21.8057 11.1523 19.7685 9.13494L20.7187 10.0099L19.6476 9.01828L19.6288 9.00078C18.4536 7.90291 16.8542 7.28742 15.1872 7.29159Z" />
        </svg>
        <input type="text" placeholder="search" />
      </div>
      <Navbar />
    </header>
  )
}

export default Header