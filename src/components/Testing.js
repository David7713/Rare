import React from 'react'
import './Testing.css'
import { useState } from 'react'
const Testing = () => {
    const [active,setActive] = useState("firstVersion")
  return (
    <div >

        <div className='testing-container'>
        <div onClick={()=>setActive("firstVersion")}>First Version</div>
        <div onClick={()=>setActive("secondVersion")}>Second Version
           
        </div></div>
    <div className='testing-main-content'>
       {active === "firstVersion" &&    <p>This is first Version</p>}
        {active === "secondVersion" &&   <p>This is second Version</p>}

        </div>

    </div>
  )
}

export default Testing
{/* <p>Step into a world where timekeeping becomes an art. Our watch brand stands at the intersection of classic craftsmanship and modern innovation,<br></br>
       offering a collection that embodies timeless elegance redefined. Each piece is meticulously designed, fusing intricate details with cutting-edge technology. <br></br>watches not only adorn your wrist but tell a story of sophistication and grace. Crafted from premium materials and powered by precision movements, they are more <br></br>than just timepieces; they are heirlooms in the making. Discover the allure of our watches, where every tick echoes the legacy of exquisite watchmaking.</p>

       <span>Craftsmanship and Quality</span>
       <ol>
        <li>Precision Craftsmanship</li>
        <li>High-Quality Materials</li>
        <li>Quality Assurance:</li>
        <li>Personalization </li>
       </ol>
        
        
        <p>Enter a realm where time is not just measured but celebrated. Our watch brand embodies the artistry of time, where every watch is a masterpiece waiting<br></br> to adorn your wrist. Each piece is meticulously crafted by skilled artisans, capturing the essence of precision and creativity. From intricate dial patterns <br></br>to thoughtfully designed cases, our watches exude elegance and sophistication. The seamless integration of form and function is our hallmark, ensuring <br></br>that every watch not only tells time but also tells a story. Immerse yourself in the artistry of time, and let our watches be the canvas upon which your unique moments are painted.</p>
        
        
       <span>Luxurious Materials</span>
       <ol>
        <li>Functional Elegance</li>
        <li>Modern Sophistication</li>
        <li>Innovative Designs</li>
        <li>Personalization </li>
       </ol> */}