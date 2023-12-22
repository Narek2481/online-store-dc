import {AxiosResponse} from "axios";
import $api,{URL} from ".";

export  async function products() {
    try {
        const response:AxiosResponse = await $api.get(URL+"/products" )
        if(response.status !== 200){
            throw new Error("request failed")
        }


        return response.data ;
    }catch (e){
        throw e
    }

}


export  async function productsGetById(id:string) {
    try {
        const response:AxiosResponse = await $api.get("/products"+id )
        if(response.status !== 200){
            throw new Error("request failed")
        }

        return response.data;
    }catch (e){
        throw e
    }

}
