import React from 'react'
import { Htag } from '../Htag/Htag'

import styles from './Kitchens.module.scss'

const Kitchens = () => {
  return (
    <div className={styles.kitchens}>
      <div className={styles.coffee_shop}>
        <div className={styles.name_back}>
          <Htag tag="kitchen_name_w">coffee-shop</Htag>
        </div>
      </div>
      <div className={styles.fast_food}>
        <div className={styles.name_back}>
          <Htag tag="kitchen_name_w">fast-food</Htag>
        </div>
      </div>
      <div className={styles.turkey}>
        <div className={styles.name_back}>
          <Htag tag="kitchen_name_w">turkey</Htag>
        </div>
      </div>
      <div className={styles.korean}>
        <div className={styles.name_back}>
          <Htag tag="kitchen_name_w">korean</Htag>
        </div>
      </div>
      <div className={styles.kyrgyz}>
        <div className={styles.name_back}>
          <Htag tag="kitchen_name_w">kyrgyz</Htag>
        </div>
      </div>
      <div className={styles.sushi}>
        <div className={styles.name_back}>
          <Htag tag="kitchen_name_w">sushi</Htag>
        </div>
      </div>
      <div className={styles.indian}>
        <div className={styles.name_back}>
          <Htag tag="kitchen_name_w">indian</Htag>
        </div>
      </div>
      <div className={styles.china}>
        <div className={styles.name_back}>
          <Htag tag="kitchen_name_w">china</Htag>
        </div>
      </div>
    </div>
  )
}

export default Kitchens
