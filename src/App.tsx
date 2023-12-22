import React from 'react';
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {AuthContext} from "./context/AuthContext";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        },

    }
})


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthContext>
                <RouterProvider router={router}/>
            </AuthContext>
        </QueryClientProvider>
    );
}

export default App;
