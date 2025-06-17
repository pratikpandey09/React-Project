import { useState } from 'react'
import { BrowserRouter, Outlet} from "react-router";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { Link } from "react-router";
import { useLocation } from 'react-router-dom';


function App() {
  const darkMode=(e)=>{
  
  }

  return (
    <div>
   <Header/>
   <Outlet/>
   <Footer/>
    </div>
  )
}

export default App
