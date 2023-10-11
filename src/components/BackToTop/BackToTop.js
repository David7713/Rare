import React from 'react'
import './../BackToTop/BackToTop.css'
import { useEffect, useState } from 'react'
import {TbDeviceWatchUp} from "react-icons/tb"


const BackToTop = () => {
    const [backToTopButton,setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",() =>{
            if(window.scrollY > 100){
                setBackToTopButton(true)
            } else{
                setBackToTopButton(false)
            }
            
        })

    },[])


    const scrollUp = () =>{
            window.scrollTo({
                top:0,
                behavior:"smooth",

            })
    }
  return (
   
      

<div className='BackToTop'>

{backToTopButton && (
    <button className='backtobutton' onClick={scrollUp}>< TbDeviceWatchUp className='icon' /></button>
)} 

</div>
  )
}

export default BackToTop