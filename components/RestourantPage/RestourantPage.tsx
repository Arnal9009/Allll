import React from 'react'
import { useState } from 'react'

import styles from "./RestourantPage.module.scss"

import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { BsArrowDown } from 'react-icons/bs'
// import { BsFillStarFill } from 'react-icons/bs'
import { Rating } from '../Rating/Rating'
import { serialize } from 'v8'
import { IconCatalog } from '../IconCatalog/IconCatalog'



const Restourant_page = () => {
  const [rating1, setRating1] = useState<number>(0)
  const [rating2, setRating2] = useState<number>(0)
  const [rating3, setRating3] = useState<number>(0)
  const [rating4, setRating4] = useState<number>(0)
  const [rating5, setRating5] = useState<number>(0)

  return (
    <div>
      <div className={styles.opening}>
        <div className={styles.social_media}>
          <span>Follow us</span>
          <GrFacebookOption fill="white" size={30} className={styles.mb_20} />
          <AiOutlineTwitter fill="white" size={30} className={styles.mb_20} />
          <FiInstagram color="white" size={30} className={styles.mb_20} />
        </div>
        <div className={styles.opening_main}>
          <h2 className={styles.opening_dicover}>Name</h2>
          <p className={styles.logoname}>Name</p>
          <span>We will help you find the best place in the city</span>
          <p>
            Scroll down
            <BsArrowDown fill="white" size={30} />
          </p>
        </div>
      </div>

      <div className={styles.aboutRestourant}>
        <div>
          <h3>Booblik</h3>
          <div className={styles.rating}>
            <Rating rating={4} className={styles.stars} />
            <span>4,2</span>
          </div>
          <div className={styles.icons}>
            <IconCatalog />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi laborum dicta omnis porro natus harum rerum reiciendis, dignissimos nam similique placeat cupiditate a illo ut, itaque reprehenderit ipsa accusantium eius debitis praesentium exercitationem. Ipsam repudiandae reprehenderit eius rem, maxime tenetur?</p>

        </div>
        <img src="https://i.ibb.co/G3vwPWF/cofffff.png" alt="" />
      </div>

      <div className={styles.rating2}>
        <div className={styles.ratingList}>
          <div className={styles.ratingItem}>
            <Rating className={styles.ratingStar} rating={rating1} isEditTable setRating={setRating1} />
            <span>Атмосфера</span>
          </div>
          <div className={styles.ratingItem}>
            <Rating className={styles.ratingStar} rating={rating2} isEditTable setRating={setRating2} />
            <span>Местополежение</span>
          </div>
          <div className={styles.ratingItem}>
            <Rating className={styles.ratingStar} rating={rating3} isEditTable setRating={setRating3} />
            <span>Еда | Кухня</span>
          </div>
          <div className={styles.ratingItem}>
            <Rating className={styles.ratingStar} rating={rating4} isEditTable setRating={setRating4} />
            <span>Обслужевание</span>
          </div>
          <div className={styles.ratingItem}>
            <Rating className={styles.ratingStar} rating={rating5} isEditTable setRating={setRating5} />
            <span>Общее</span>
          </div>
          <p>Время работы :</p>
          <p>Средний чек :</p>
          <div className={styles.buttons}>
            <button className={styles.button}>ДОСТАВКА</button>
            <button className={styles.button2}>АДРЕСС</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Restourant_page
