import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import Restourant_page from "../components/RestourantPage/RestourantPage";

import styles from "../styles/restourant.module.scss"

export default function Home() { 
  return ( 
    <div className={styles.restourant}> 
      <Header/>
        <Restourant_page/>
        
      <Footer/>
    </div> 
  ) 
}