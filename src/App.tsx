import React, {useEffect} from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {atom, useAtom} from "jotai";
import {bagAtom} from "./context/atom";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        },

    }
})


export const themAtom = atom("aaaa")


function App() {
    const setInBag = useAtom(bagAtom)[1]


    useEffect(() => {
        const state = localStorage.getItem("bag")
        setInBag(state ? JSON.parse(state) : [] )
    }, [setInBag]);


    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    );
}

export default App;
