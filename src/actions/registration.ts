import {AxiosResponse} from "axios";
import $api,{URL} from "./index";
import {IRegistration} from "../common/types/interfaces";

export default async function registration(data:IRegistration) {
    try {
        const response:AxiosResponse = await $api.post(URL+"/users/register", {
           ...data,
            isAdmin:true
        })
        if(response.status !== 200){
            throw new Error("request failed")
        }
        return response;
    }catch (e){
        throw e
    }

}
