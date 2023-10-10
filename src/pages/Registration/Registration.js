import { useState, useEffect } from 'react'
import './Registration.css'
import Footer from '../../components/Footer/Footer'
import BackToTop from '../../components/BackToTop/BackToTop'
import RegistrationImage from './Registration Assets/registration.png'
import { useFormik } from 'formik'
import { RiErrorWarningFill } from 'react-icons/ri'
import { FaUser } from 'react-icons/fa'
import * as Yup from 'yup'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { auth } from '../../firebase-config/firebase-config'


const Registration = () => {






  const [user, setUser] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);





  const Login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, formik.values.email, formik.values.password);

      console.log(user);
    } catch (error) {
      // Handle errors and set the error state
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setError('Incorrect email or password.');
      } else {
        setError('Incorrect email or password.');
        console.error(error.message);
      }
    }
  };




  const Logout = async () => {
    await signOut(auth)

  }






  const Register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, formik.values.email, formik.values.password);
     
    } catch (error) {
      console.error(error.message);
    }
  };





  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",


    },
    validationSchema: Yup.object({

      email: Yup.string().email("Invalid Email Address").required("Required"),
      password: Yup.string().min(8, "Must be 8 Charecter or More").max(15, "Must be 15 Charecter or Less").required("Required"),
    }),

    onSubmit: (values) => {

    }
  })





  const [active, setActive] = useState("Login-Part")

  return (

    <div>
      <div className='registration-part'>

        <div className='registration-text'>
          <p>ACCOUNT</p>
        </div>
        <img className='registration-image' src={RegistrationImage}></img>

      </div>



      {user ? (
        <div className='logged-in-user'>
          <div>
            <h2>Account</h2>
            <p onClick={Logout}>  <FaUser></FaUser>Sign Out</p>

            <h2>Order history</h2>
            <p>You haven't placed any orders yet.</p>
          </div>
          <div>

            <h2>Account Details</h2>
            <p>  {user.email}</p>
          </div>
        </div>
      ) : (
        <div className='user-registration-login-part'>
          {active === "Login-Part" && (
            <form className='user-login-form' onSubmit={formik.handleSubmit}>
              <p id="login" className={active === "Login-Part" ? 'active' : ''} onClick={() => setActive("Login-Part")}>Login</p>

              {error && <p> <RiErrorWarningFill></RiErrorWarningFill> {error}</p>}
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
              {formik.touched.email && formik.errors.email ? <p >{formik.errors.email}</p> : null}
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
              {formik.touched.password && formik.errors.password ? <p >{formik.errors.password}</p> : null}
              <div className='submit-registration-part'>
                <button onClick={Login} className='submit' type='submit'>Login</button>
                <p className={active === "Register-Part" ? 'active' : ''} onClick={() => setActive("Register-Part")}>Create Account</p>
              </div>
            </form>
          )}
        </div>
      )}





      {   user ? (
""
      ) : ( <div className='user-registration-part'>
      {active === "Register-Part" && <>
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
            {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}






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
            {formik.touched.email && formik.errors.email ? <p >{formik.errors.email}</p> : null}






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
            {formik.touched.password && formik.errors.password ? <p >{formik.errors.password}</p> : null}

            <button onClick={Register} className='submit' type='submit' >Register</button>

          </form>

          </>}
        </div>)}

      <Footer></Footer>
      <BackToTop></BackToTop>
    </div>






  )
}

export default Registration 