// import { useState } from 'react'
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import App from './App';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import Github from './components/Github/Github';
// import User from './components/User/User';
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'



// // const root = ReactDOM.createRoot(document.getElementById('root'));

    
// // root.render(
// //   <BrowserRouter>
// //     <Routes>
// //         <Route path='/' element={<Home />} />
// //         <Route path='/about' element={<About />} />
// //         <Route path='/contact' element={<Contact />} />
// //         <Route path='/github' element={<Github />} />
// //         <Route path='/user/:userid' element={<User />} />
// //     </Routes>
// //   </BrowserRouter>
// // )

// // function App() {
// //   return (
// //     <>
// //     <Header/>
// //     {/* <Outlet /> */}
// //     <Footer />
// //     </>
// //   )
// // }

// // ✅ This is the part you must include:
// export default App;


import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Header from "./components/Header/Header"
import Footer from "./components//Footer/Footer"
import Contact from "./components/Contact/Contact"

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}


