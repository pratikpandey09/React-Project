import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Route, RouterProvider, BrowserRouter, createBrowserRouter, createRoutesFromElements, Router } from 'react-router-dom'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'
// import User from './components/User/User.jsx'
// import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:userid' element={<User />} />
//       <Route 
//       loader={githubInfoLoader}
//       path='github' 
//       element={<Github />}
//        />
//     </Route>
//   )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     {/* <App/> */}
//       <RouterProvider router={router} />
//     </BrowserRouter>
//   </React.StrictMode>  
// )