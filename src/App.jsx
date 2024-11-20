import { useState } from 'react'
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'flowbite';
import './index.css'; // Or './tailwind.css' depending on your setup

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from 'jquery';
import React from "react";


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from './Tailwindcss/Sample';

import Home from './Shopping mall/Home';

import Navv from './Shoppingweb/Navv';
import SecondPage from './Shoppingweb/SecondPage';
import Thirdpage from './Shoppingweb/Thirdpage';
import FourthPage from './Shoppingweb/FourthPage';
import Fifthpage from './Shoppingweb/Fifthpage';
import Benifitsofbuilding from './Shoppingweb/Benifitsofbuilding';
import Generate from './Shoppingweb/Generate';
import Browser from './Shoppingweb/Browser';
import FQA from './Shoppingweb/FQA';
import Footer from './Shoppingweb/Footer';
import ReactOwlCarousel from 'react-owl-carousel';
import CarouselComponent from './Shoppingweb/Carouselcomponent';


function App() {
  

  return (
    <>
    {/* <Sample/> */}
  
    {/* <Home/> */}
  

    <Navv/>    
    <SecondPage/>
    <Thirdpage/>
    <FourthPage/>
    <Fifthpage/>
   <Benifitsofbuilding/>
   <Generate/>
   <Browser/>
   <FQA/>
   <Footer/>
   {/* <CarouselComponent/> */}
    </>
  )
}

export default App
