import React, {FC, useState} from "react";
import {IAuthContext} from "../common/types/interfaces";




export const Auth = React.createContext<IAuthContext>({})


export const AuthContext: FC<any> = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token") || null)

    return (
        <Auth.Provider value={{token, setToken}}>
            {children}
        </Auth.Provider>
    );
};
