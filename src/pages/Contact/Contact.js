import React from 'react'
import { useState } from 'react'
import './Contact.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import Footer from '../../components/Footer/Footer'
import BackToTop from '../../components/BackToTop/BackToTop'
import {IoCheckmarkCircle} from 'react-icons/io5'
import ContactImage from './Contact Assets/contact.png'
import {useFormik} from 'formik'
import * as Yup from 'yup'


const Contact = () => {



  const [isSubmitted, setIsSubmitted] = useState(false);
const formik = useFormik({
  initialValues :{
    name:"",
    email:"",
    number:"",
    comment:"",
  

  },
  validationSchema: Yup.object({
    name:Yup.string().max(15,"Must be 15 Charecter or Less").required("Required"),
    email:Yup.string().email("Invalid Email Address").required("Required"),
    number:Yup.number().required("Required"),
    comment:Yup.string().max(100,"Must be 100 Charecter or Less").required("Required"),
       
  }),
  
  onSubmit:(values) =>{
    setIsSubmitted(true)
  }
})



  return (
<div>
<div className='contact-part'>

<div className='contact-text'>
  <p>CONTACT US</p>
</div>
<img className='contact-image' src={ContactImage}></img>

</div>
<div class="rare-map"><div class="gmap_canvas"><iframe class="gmap_iframe" width="800px" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=626&amp;height=400&amp;hl=en&amp;q= No: 58 A, East Madison Street, Baltimore, MD, USA 4508&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
</div>


<div className='contact-container'>
   
      <div> 
      <BsFillTelephoneFill className='contact-box-icon'></BsFillTelephoneFill>
    <p>Phone</p>
    <span> 0000 - 123 - 456789<br></br>
    0000 - 987-654-321</span>

        
      </div>
      <div>
      <MdEmail className='contact-box-icon'></MdEmail>
    <p>Email</p>
    <span>mail@example.com<br></br>
support@example.com</span>
      </div>
      <div>
      <MdLocationOn className='contact-box-icon'></MdLocationOn>
    <p>Address</p>
    <span>No: 58 A, East Madison Street,<br></br>
Baltimore, MD, USA 4508</span>
      </div>
    

</div>


  <form className='form-container'

    onSubmit={formik.handleSubmit}
  
  >
    {isSubmitted ? <span className='reply-text'><IoCheckmarkCircle className='checkmark-icon'></IoCheckmarkCircle>Thanks for contacting us. We'll get back to you as soon as possible.</span> : <p className='reply-text'>Feel Free To Contact With Us </p>}


    
    <div className='input-container'>
    <input 
    type='text'
    placeholder='Name'
    id='name'
    className='name'
    name='name'
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.name}
    ></input>
      {formik.touched.name &&formik.errors.name ?<p>{formik.errors.name}</p> : null}


      </div>









<div className='input-container'>

    <input
     type='email'
     className='email'
     placeholder='Email'
     id='email'
     name='email'
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.email}
     ></input>
      <br></br> 
     {formik.touched.email &&formik.errors.email ?<p >{formik.errors.email}</p> : null}


     </div>
 


     <div className='input-container'>

    <input
     type='number'
     placeholder='Phone Number'
     className='number'
     id='number'
     name='number'
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.number}
     ></input>
      {formik.touched.number &&formik.errors.number ?<p className='boo'>{formik.errors.number}</p> : null}
      </div>

      <div className='input-container'>
    <textarea 
    placeholder='Comment'
    id='comment'
    name='comment'
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.comment}
    className='comment'>

    </textarea>
    {formik.touched.comment && formik.errors.comment ?<p className='boo'>{formik.errors.comment}</p> : null}

</div>

    <button className='submit' type='submit' >Submit</button>

  </form>
 

<Footer></Footer>
<BackToTop></BackToTop>
</div>
  )
}

export default Contact