import {createBrowserRouter, Navigate, Outlet} from "react-router-dom";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Home} from "../pages/Home";
import {Login} from "../pages/Login";
import {Registration} from "../pages/Registration";


export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header/>
                <Outlet/>
                <Footer/>
            </>
        ),
        children: [
            {
                index:true,
                element: <Navigate to="home"/>,
            },
            {
                path:"home",
                element: <Home/>,
            },
            {
                path:"login",
                element: <Login/>,
            },
            {
                path:"registration",
                element:<Registration/>
            }
        ]
    }
])
