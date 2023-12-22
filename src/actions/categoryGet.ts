import {AxiosResponse} from "axios";
import $api,{URL} from ".";
import {ICategories} from "../common/types/interfaces";

export  async function categoryGet() {
    try {
        const response:AxiosResponse = await $api.get(URL+"/categories")
        if(response.status !== 200){
            throw new Error("request failed")
        }
        const data:ICategories[] = response.data
        return   data;
    }catch (e){
        throw e
    }

}

export  async function categoryGetById(id:string) {
    try {
        const response:AxiosResponse = await $api.get("/categories/"+id )
        if(response.status !== 200){
            throw new Error("request failed")
        }



        return response.data;
    }catch (e){
        throw e
    }

}
