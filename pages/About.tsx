import AboutOpening from "../components/AboutOpening/AboutOpening";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import { Htag } from "../components/Htag/Htag";
import Kitchens from "../components/Kitchens/Kitchens";
import Opening from "../components/Opening/Opening";

import styles from "../styles/about.module.scss"

export default function Home() { 
  return ( 
    <div className={styles.About_us}> 
      <Header/>
      {/* <Opening/> */}
      <AboutOpening/>
      {/* <Kitchens/> */}
      <Footer/>
      
    </div> 
  ) 
}