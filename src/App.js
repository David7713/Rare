import React from 'react'
import './App.css' 
import { useState ,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Registration from './pages/Registration/Registration'
import ClockLoader from "react-spinners/ClockLoader";
import Cart from './pages/Cart/Cart'
import Testing from './components/Testing';
import WatchDetail from './pages/WatchDetail/WatchDetail';
import Analogdata from './pages/Shop/AnalogData';
import MechanicalData from './pages/Shop/MechanicalData';
import AutomatData from './pages/Shop/AutomatData';

// import Slider from './components/Slider/Slider';
// import Discount from './components/Discount/Discount';
// import Popular from './components/Popular/Popular';
// import Parallax from './components/Parallax/Parallax';
// import Catalog from './components/Catalog/Catalog';
// import Subscription from './components/Subscription/Subscription';
// import Footer from './components/Footer/Footer';

const App = () => {
  const [loading,setLoading] = useState(false)
  const [cartItems,setCartItems] = useState([])
  
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
    
        cartItems.map((item) =>
        
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
            )
            
            );
       } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    console.log(product)
  };
 


  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item
        )
      );
    }
  };




  const handleCartClear = () =>{
    setCartItems([]);
  }
  

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
setLoading(false)
    },1000)
 },[])


  return (
    <>
     {
    loading?
    <div className='spinnerContainer'>
    <ClockLoader
    className='spinner'
    color='#CCA471'
    cssOverride={{}}
    size={160}
    speedMultiplier={5}
  />
  </div>
    :
    <Router>
      <NavigationBar Cart={Cart} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} ></NavigationBar>

      {/* <Home></Home> */}
      {/* <Slider></Slider>
      <Discount></Discount>
    <Popular></Popular>
    <Parallax></Parallax>
    <Catalog></Catalog>
    <Subscription></Subscription>
    <Footer></Footer>
     */}
      <Routes>
        <Route path='/Rare' element={<Home />} exact />
        <Route path='/home' element={<Home />} exact />
        <Route path='/' element={<Home />} exact />
        <Route path='/shop'  element={<Shop handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/contact' element={<Contact />} exact />
        <Route path='/registration' element={<Registration />} exact />
        <Route path='/cart' element={<Cart
         cartItems={cartItems} 
         handleAddProduct={handleAddProduct}
         handleRemoveProduct={handleRemoveProduct}
         handleCartClear={handleCartClear}/>
         } exact />
      <Route path='/watch/Analog/:id' element={<WatchDetail watches={Analogdata} 
      cartItems={cartItems} 
      handleAddProduct={handleAddProduct}
      handleRemoveProduct={handleRemoveProduct}
      handleCartClear={handleCartClear}/>
      } />
  <Route path='/watch/Mechanical/:id' element={<WatchDetail watches={MechanicalData} />} />
  <Route path='/watch/Automat/:id' element={<WatchDetail watches={AutomatData} />} />

      </Routes>
    </Router>
}
    </>
  )
}

export default App
