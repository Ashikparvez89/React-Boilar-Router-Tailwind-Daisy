import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Mainlayouts from "../Layouts/Mainlayouts";
import About from "../Components/Pages/About";
import Contact from "../Components/Pages/Contact";

export const router = createBrowserRouter([

    {
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/",
        element: <Mainlayouts></Mainlayouts>,
        children:[
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element: <Contact></Contact>
            }
        ]
    },
  ]);