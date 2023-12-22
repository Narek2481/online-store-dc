import {useMutation} from "@tanstack/react-query";
import {IRegistration} from "../types/interfaces";
import registration from "../../actions/registration";

export const useRegistration = (success:Function,...args:any) => {
    return useMutation({
        mutationKey:["registration"],
        mutationFn:(body:IRegistration) => {
            return registration(body)
        },
        onSuccess:() =>  success(...args)
    })
};
