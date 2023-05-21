
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AboutUs from './components/AboutUs/AboutUs';
import RootLayout from './components/RootLayout/RootLayout';
import Register from './components/Register/Register';

import {createBrowserRouter,RouterProvider} from 'react-router-dom'


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/aboutus",
          element:<AboutUs/>
        },
        {
          path:"/login",
          element:<Login/>,
         
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    }
  ])
  return (
   <div>
    <RouterProvider router={router}/>
    
   </div>
  );
}

export default App;
