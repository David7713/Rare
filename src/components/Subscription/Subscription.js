import React from 'react'
import './Subscription.css'
import SubscriptionBackground from './Subscription Assets/SubscriptionBackground.png'
import {BsYoutube} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {BsTelegram} from "react-icons/bs"
import {FaPinterestP} from "react-icons/fa"
const Subscription = () => {
  return (
  <div className='subscription-part'>
    <div className='subscription-text'>
        <p className='subscription-header'>Subscription</p>
        <div className="input-button-container">
    <input type="text" placeholder="Email Address" />
    <button>SUBSCRIBE</button>
  </div>
        <p className='subscription-policy'>Will be used in accordance with our Privacy policy</p>
            <ul className='social-medias'>
                <li><AiOutlineTwitter></AiOutlineTwitter></li>
                <li><BsFacebook></BsFacebook></li>
                <li><FaPinterestP></FaPinterestP></li>
                <li><AiFillInstagram></AiFillInstagram></li>
                <li><BsTelegram></BsTelegram></li>
                <li><BsYoutube></BsYoutube></li>
            </ul>
    </div>
        <img className='SubscriptionBackground' src={SubscriptionBackground}></img>
        </div>
  )
}

export default Subscription
