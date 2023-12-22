import {useContext} from "react";
import {Auth} from "../../context/AuthContext";
import {IAuthContext} from "../types/interfaces";

export const useAuth = ():IAuthContext => {
    return useContext(Auth)
};
