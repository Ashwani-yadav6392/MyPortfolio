import { createRoot } from "react-dom/client";
let div = document.getElementById("root");
import "./global.css"
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./routes/Routing";

createRoot(div).render(
    <RouterProvider router={myRoutes}/>
)


