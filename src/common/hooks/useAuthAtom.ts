import {useAtom} from "jotai";
import {authAtom} from "../../context/atom";
import {useEffect} from "react";

export const useAuthAtom = () => {
    const [auth, setAuth] = useAtom(authAtom)
    useEffect(() => {
        if (auth) {
            localStorage.setItem("token", auth)
        }
    }, [auth])
    return {auth, setAuth}
};
