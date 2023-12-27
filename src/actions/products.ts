import {AxiosResponse} from "axios";
import $api,{URL} from ".";
import {IProduct} from "../common/types/interfaces";

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


export  async function productsCount(count:number) {
    try {
        const token:string = `Bearer ${JSON.parse(localStorage.getItem("token")|| "")}`
        const response:AxiosResponse = await $api.get(URL+"/products/"+count,{
            headers:{
                'Authorization': token,
                'Content-Type': 'application/json',
            }
        } )
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
        console.log(id)
        const response:AxiosResponse = await $api.get(URL+`/products/${id}` )
        // if(response.status !== 200){
        //     throw new Error("request failed")
        // }

        return response.data as IProduct;
    }catch (e){
        throw e
    }

}
