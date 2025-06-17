import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'; // ya jiska bhi naam hai
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './components/Home/Home';
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx';


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Contact",
        element:<Contact/>
      },
      {
        path:"Github",
        element:<Github/>
      },
      {
        path:"user/:userid",
        element:<User/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
