import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home';
import About from './views/About/About';
import Destinastion from './views/Destinastion/Destinastion';
import Offers from './views/Offers/Offers';
import Seats from './views/Seats/Seats';
import SignUp from './views/SignUp/SignUp';
import Login from './views/Login/Login';


import { createBrowserRouter,RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },

    {
        path:"/About",
        element:<About/>,
    },

    {
      path:"/Destinastion",
      element:<Destinastion/>
    },

    {
      path:"/Offers",
      element:<Offers/>
    },

    {
      path:"/Seats",
      element:<Seats/>
    },

    {
      path:"/SignUp",
      element:<SignUp/>
    },

    {
      path:"/Login",
      element:<Login/>
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <>
         <RouterProvider router={router} />
    </>
);