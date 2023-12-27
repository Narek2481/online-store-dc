import React from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {atom} from "jotai";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        },

    }
})


export const themAtom = atom("aaaa")


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    );
}

export default App;
