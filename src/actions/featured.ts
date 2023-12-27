import {AxiosResponse} from "axios";
import $api, {URL} from "./index";

export  async function featured() {
    try {
        const response:AxiosResponse = await $api.get(URL+"/products/get/featured/10" )
        if(response.status !== 200){
            throw new Error("request failed")
        }


        return response.data ;
    }catch (e){
        throw e
    }

}


export  async function featuredCount(count:number) {
    try {
        const response:AxiosResponse = await $api.get(URL+"/products/get/featured/"+count )
        if(response.status !== 200){
            throw new Error("request failed")
        }


        return response.data ;
    }catch (e){
        throw e
    }

}
