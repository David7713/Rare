import React from 'react'
import Slider from '../../components/Slider/Slider'
import Discount from '../../components/Discount/Discount'
import Popular from '../../components/Popular/Popular'
import Parallax from '../../components/Parallax/Parallax'
// import GridBoxes from '../../components/Gridbox/GridBoxes'
import Catalog from '../../components/Catalog/Catalog'
import Subscription from '../../components/Subscription/Subscription'
import Footer from '../../components/Footer/Footer'
import BackToTop from '../../components/BackToTop/BackToTop'
const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <BackToTop></BackToTop>
      <Discount></Discount>
      <Popular></Popular>
      <Parallax></Parallax>
      <Catalog></Catalog>
      <Subscription></Subscription>
      <Footer></Footer>

    </div>
  )
}

export default Home