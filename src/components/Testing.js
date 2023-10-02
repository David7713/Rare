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