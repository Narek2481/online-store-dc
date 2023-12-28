import {createBrowserRouter, Navigate, Outlet} from "react-router-dom";
import {Header} from "../components/layout/Header";
import {Footer} from "../components/layout/Footer";
import {Home} from "../pages/Home";
import {Login} from "../pages/Login";
import {Registration} from "../pages/Registration";
import {Store} from "../pages/Store";
import {ProductPage} from "../pages/ProductPage";
import {BagPage} from "../pages/BagPage";
import {StoreRedirect} from "../pages/StoreRedirect";
import {OrdersHistory} from "../pages/OrdersHistory";
import {PrivetForLogin} from "./Privet";


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
                index: true,
                element: <Navigate to="home"/>,
            },
            {
                path: "home",
                element: <Home/>,
            },
            {
                path: "login",
                element: (
                    <PrivetForLogin>
                        <Login/>
                    </PrivetForLogin>
                ),
            },
            {
                path: "registration",
                element: (
                    <PrivetForLogin>
                        <Registration/>
                    </PrivetForLogin>
                )
            },
            {
                path: "store",
                element: <StoreRedirect/>,
            },
            {
                path: "store/:id",
                element: <Store/>,
            },
            {
                path: "store/:id/:categoryId",
                element: <ProductPage/>
            },
            {
                path: "/shopping_bag",
                element: <BagPage/>
            },
            {
                path: "/orders",
                element: <OrdersHistory/>
            }
        ]
    }
])
