import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import Body from "../components/Body";
import Menu from "../components/Menu";

const appRouter = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path:"",
                Component: Body
            },
            {
                path:"about",
                Component: About
            },
            {
                path:"contact",
                Component: Contact
            },
            {
                path: "/menu/:id",
                Component: Menu
            }
        ]
    },
    {
       
    }

])

export default appRouter