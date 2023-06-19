import React from 'react'
import Header from '../components/Layout/Header'
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Checkout from "../components/Checkout/Checkout";
import Footer from '../components/Layout/Footer';
import Appthemeselector from '../components/Appthemeselector';

const CheckoutPage = () => {
  return (
    <div>
        <Header />
        
        <br />
        <br />
        <Appthemeselector/>
        <CheckoutSteps active={1} />
        <Checkout />
        <br />
        <br />
        <Footer />
    </div>
  )
}

export default CheckoutPage