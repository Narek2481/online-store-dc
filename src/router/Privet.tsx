import {useAuthAtom} from "../common/hooks/useAuthAtom";
import {Navigate} from "react-router-dom";
import {FC} from "react";

export const PrivetForLogin:FC<any> = ({children}) => {
    const {auth} = useAuthAtom()
    return (
        <>
            {auth ? <Navigate to={"/home"}/> : <>{children}</>}
        </>
    );
};
