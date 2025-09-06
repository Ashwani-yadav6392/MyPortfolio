import { createRoot } from "react-dom/client";
import App from "./App";
let div = document.getElementById("root");
import "./global.css"
import { myRoutes } from "./routes/Routing";
createRoot(div).render(
    <AuthContextProvider>
        <RouterProvider router={myRoutes}/>
    </AuthContextProvider>
);

