import $api,{URL}  from ".";
import {AxiosResponse} from "axios";
import {ILogin} from "../common/types/interfaces";

interface loginResponse {
    user:string;
    token:string
}


export default async function loginSubmit(body:ILogin,success:Function) {
    try {
        const response:AxiosResponse<loginResponse> = await $api.post(URL+"/users/login", {
            ...body
        })
        if(response.status !== 200){
            throw new Error("request failed")
        }

        localStorage.setItem("token",response.data.token)

        return response.data;
    }catch (e){
        throw e
    }

}
