import React from 'react'
import MainPage from '../MainPage/MainPage'
import Backpack from '../Backpack/Backpack'
import New from '../New/New'
import Feature from '../Feature/Feature'
import Offer from '../Offer/Offer'
import Brand from '../Brand/Brand'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <div>
     
   <MainPage/>
   <Backpack/>
   <Feature/>
   <Offer/>
  
   <New/>
   <Brand/>
 <Footer/>
   </div>
  )
}

export default Home