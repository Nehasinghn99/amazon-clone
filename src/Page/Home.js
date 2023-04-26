import React from 'react';
import "./Home.css";
import { Outlet } from "react-router-dom";
import Navbar from '../Component/Navbar';
import Slider from '../Component/Slider';
import Footer from '../Component/Footer';
import Container from '../Component/Container';


import { headerItems, products } from "../utils/ProductsData";
import Banner1 from "../BannerImages/Banner1.jpg";
import Banner2 from "../BannerImages/Banner2.jpg";
import Banner3 from "../BannerImages/Banner3.jpg";
import Banner4 from "../BannerImages/Banner4.jpg";
import Banner5 from "../BannerImages/Banner5.jpg";
import Banner6 from "../BannerImages/Banner6.jpg";
import Banner7 from "../BannerImages/Banner7.jpg";
import Banner8 from "../BannerImages/Banner8.jpg";
import Banner9 from "../BannerImages/Banner9.jpg";
import Banner10 from "../BannerImages/Banner10.jpg";
import Product from '../Component/Product';
import BackToTop from '../Component/BackToTop';
import FProduct from '../Component/FProduct';
import MultiSlider1 from '../Component/MultiSlider1';
import MultiSlider2 from '../Component/MultiSlider2';
import MultiSlider3 from '../Component/MultiSlider3';
import MultiSlider4 from '../Component/MultiSlider4';
import MultiSlider5 from '../Component/MultiSlider5';
import MultiSlider6 from '../Component/MultiSlider6';
import MultiSlider7 from '../Component/MultiSlider7';
import MultiSlider8 from '../Component/MultiSlider8';

const Home = () => {
  const BannerImages = [Banner7, Banner8, Banner9, Banner10, Banner4, Banner5, Banner6,Banner1, Banner2, Banner3];
    return (
      <>
        <Navbar/>
        <div className="item-container">
         {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
        </div>
        <div className="home">
          <div className="home-container">
            <Slider images={BannerImages}/>
            <div className="home-row">
              {products.slice(12, 16).map((item) => (
                <FProduct 
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  specification={item.specification}
                  detail={item.detail}
                />
              ))}
            </div>
            <Container/>
            <MultiSlider1/>
            <MultiSlider2/>
            <Container/>
            <MultiSlider3/>
            <MultiSlider4/>
            <Container/>
            <MultiSlider5/>
            <MultiSlider6/>
            <Container/>
            <MultiSlider7/>
            <MultiSlider8/>
          </div>
        </div>
        <BackToTop/>
        <Footer/>
        <Outlet/>
      </>
    )

}

export default Home
