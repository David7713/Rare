import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAM17VKRx_kbJINj89HdU8RkJAXAb-qo3g",
    authDomain: "rare-ecommerce-website.firebaseapp.com",
    projectId: "rare-ecommerce-website",
    storageBucket: "rare-ecommerce-website.appspot.com",
    messagingSenderId: "1057993709254",
    appId: "1:1057993709254:web:3eb3f37c98e6ac5e0f29c7",
    measurementId: "G-8EXWX5PF7H"
  };


  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);