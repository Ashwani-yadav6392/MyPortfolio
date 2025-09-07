import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Skills from "../component/Skills";
import About from "../component/About";
import HomePage from "../component/HomePage";
import Project from "../component/Project";
import Contact from "../component/Contact";


export let myRoutes=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<HomePage/>

            },
            {
                path:"/skills",
                element:<Skills/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
               path:"/project",
               element:<Project/> 
            },
            {
                path:"/contact",
                element:<Contact/>
            }
          
        ]

    }
])