// import React from 'react'
// import Header from "../components/Layout/Header";
// import Hero from "../components/Route/Hero/Hero";
// import Categories from "../components/Route/Categories/Categories";
// import BestDeals from "../components/Route/BestDeals/BestDeals";
// import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
// import Events from "../components/Events/Events";
// import Sponsored from "../components/Route/Sponsored";
// import Footer from "../components/Layout/Footer";
// import { FloatingWhatsApp } from 'react-floating-whatsapp';
// import FloatingButton from './FloatingButton';

// const HomePage = () => {
//   return (
//     <div>
//         <Header activeHeading={1} />
//         <Hero />
//         <Categories />
//         {/* <FloatingWhatsApp
//         phoneNumber="7617730973"
//         accountName="Varun"
//         allowEsc
//         allowClickAway
//         notification
//         notificationSound
//         avatar='https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=avif&w=256'
//       /> */}
//           <FloatingButton/>
       
        
//         <BestDeals />
//         <Events />
//         <FeaturedProduct />
       
//         <Footer />
//     </div>
//   )
// }

// export default HomePage



import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import Appthemeselector from '../components/Appthemeselector';
import FloatingButton from './FloatingButton';
import BottomTab from './BottomTab';
import Example from '../components/cards/Card';
import SliderComponent from '../components/cards/Card';

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        {/* <Categories /> */}
        {/* <FloatingWhatsApp
        phoneNumber="7617730973"
        accountName="Varun"
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar='https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=avif&w=256'
      /> */}
        <FloatingButton/>
        <BestDeals />
        <Events />
        <FeaturedProduct />
        {/* <Sponsored /> */}
        {/* <SliderComponent/> */}
        <Footer />
        <Appthemeselector/>
        {/* <BottomTab className="bottomtab-mobile" /> */}
    </div>
  )
}

export default HomePage