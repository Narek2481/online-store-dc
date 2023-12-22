import {useMutation} from "@tanstack/react-query";
import loginSubmit from "../../actions/login";
import {ILogin} from "../types/interfaces";

export const useLogin = (success: Function) => {
    return useMutation({
        mutationKey: ["login"],
        mutationFn:  (body:ILogin) => {
           return  loginSubmit(body,success)
        },
        onSuccess: (data) => success(data.token)
    })
};
