import React from 'react'
import Slider from '../../components/Slider/Slider'
import Discount from '../../components/Discount/Discount'
import Popular from '../../components/Popular/Popular'
import Parallax from '../../components/Parallax/Parallax'
// import GridBoxes from '../../components/Gridbox/GridBoxes'
import Catalog from '../../components/Catalog/Catalog'
const Home = () => {
  return (
    <div>
      <Slider></Slider>
    <Discount></Discount>
    <Popular></Popular>
    <Parallax></Parallax>
    <Catalog></Catalog>

    </div>
  )
}

export default Home