import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import { Htag } from "../components/Htag/Htag";
import Kitchens from "../components/Kitchens/Kitchens";
import Opening from "../components/Opening/Opening";

export default function Home() { 
  return ( 
    <div> 
      <Header/>
      <Opening/>
      <Kitchens/>
      <Footer/>
      
    </div> 
  ) 
}