import {createBrowserRouter, Navigate, Outlet} from "react-router-dom";
import {Header} from "../components/layout/Header";
import {Footer} from "../components/layout/Footer";
import {Home} from "../pages/Home";
import {Login} from "../pages/Login";
import {Registration} from "../pages/Registration";
import {Store} from "../pages/Store";
import {ProductPage} from "../pages/ProductPage";


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
            },
            {
                path:"store/:id",
                element:<Store/>,
            },
            {
                path:"store/:id/:productId",
                element:<ProductPage/>
            }
        ]
    }
])
