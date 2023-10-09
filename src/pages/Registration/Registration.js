import { useState } from 'react'
import './Registration.css'
import RegistrationImage from './Registration Assets/registration.png'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut } from 'firebase/auth'
import { auth } from '../../firebase-config/firebase-config'
const Registration = () => {












  const [isSubmitted, setIsSubmitted] = useState(false);


const formik = useFormik({
  enableReinitialize: true,
  initialValues :{
    email:"",
    password:"",


  },
  validationSchema: Yup.object({

   email:Yup.string().email("Invalid Email Address").required("Required"),
    password:Yup.string().max(15,"Must be 15 Charecter or Less").required("Required"),
  }),
  
  onSubmit:(values) =>{ 
alert(JSON.stringify(values))
  }
})

const Register = async () => {
  try {
    const user = await createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password);
    console.log(user);
  } catch (error) {
    console.error(error.message);
  }
};



  
  const [active,setActive] = useState("Login-Part")
  
  return (
    <div>
      <div className='registration-part'>

<div className='registration-text'>
  <p>ACCOUNT</p>
</div>
<img className='registration-image' src={RegistrationImage}></img>

</div>





<div className='user-registration-login-part'>
  {active === "Login-Part" && 

    <form 
    className='user-login-form'
    onSubmit={formik.handleSubmit}
        >
    <p id="login" className={active === "Login-Part" ? 'active' : '' } onClick={() => setActive("Login-Part")}>Login</p>

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

     <input
     type='password'
     className='password'
     placeholder='Password'
     id='password'
     name='password'
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.password}
     autoComplete='current-password'
     ></input>
      <br></br> 
     {formik.touched.password &&formik.errors.password ?<p >{formik.errors.password}</p> : null}

    <div className='submit-registration-part'>
      <button  className='submit' type='submit' 
      >Login</button>
      <p className={active === "Register-Part" ? 'active' : ''} onClick={() => setActive("Register-Part")}>Create Account</p>
      </div>
      </form>
   

  }



















{active === "Register-Part" &&<>

<p id='register'>Create account</p>
<form className='user-registration-form'

onSubmit={formik.handleSubmit}
>





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






  <input
     type='password'
     className='password'
     placeholder='Password'
     id='password'
     name='password'
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.password}
     autoComplete='current-password'
     ></input>
      <br></br> 
     {formik.touched.password &&formik.errors.password ?<p >{formik.errors.password}</p> : null}

<button onClick={Register}  className='submit' type='submit' >Register</button>

</form>

  </>}
    
</div>














<h2>user logged in</h2>





    </div>
  )
}

export default Registration 