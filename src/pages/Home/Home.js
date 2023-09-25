import React from 'react'
import Slider from '../../components/Slider/Slider'
import Discount from '../../components/Discount/Discount'
import Popular from '../../components/Popular/Popular'
import GridBoxes from '../../components/Gridbox/GridBoxes'
const Home = () => {
  return (
    <div>
      <Slider></Slider>
    <Discount></Discount>
    <Popular></Popular>
    {/* <GridBoxes></GridBoxes> */}
    </div>
  )
}

export default Home