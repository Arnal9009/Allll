import React from 'react'

import styles from './footer.module.scss'

import { IoIosArrowForward } from 'react-icons/io'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <h2>
          Ration.
        </h2>
        <div>
          <button>Get started</button>
        </div>
      </div>
      <hr />
      <div className={styles.footer_midle}>
        <div>
          <p>Your suggestions and notes</p>
          <div className={styles.footer_email}>
            <input type="text" placeholder="Email addres" />
            <button>
              <IoIosArrowForward width="15" fill="black"/>
            </button>
          </div>
        </div>
        <table>

          <td>
            <tr>Services</tr>
            <tr>Email Marketing</tr>
            <tr>Campaigns</tr>
            <tr>Branding</tr>
            <tr>Offline</tr>
          </td>

          <td>
            <tr>About</tr>
            <tr>Our Story</tr>
            <tr>Team</tr>
            <tr>Careers</tr>
          </td>

          <td>
            <tr>Help</tr>
            <tr>Contact Us</tr>
          </td>

        </table>
      </div>
      <div className={styles.footer_bottom}>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
        <div className={styles.footer_inst}>
          <GrFacebookOption size={30}/>
          <AiOutlineTwitter size={30}/>
          <FiInstagram size={30}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
