import {IProductForOrder} from "../common/types/interfaces";
import $api, {URL} from "./index";


export default async function createOrder(body: IProductForOrder) {
    try {
        const userData = await $api.get(URL + "/users/"+localStorage.getItem("userId"), {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json', // Adjust content type as needed
            }
        })
        const response = await $api.post(URL + "/orders", {
            ...body,
            ...userData.data
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json', // Adjust content type as needed
            }
        })

        if (response.status !== 200) {
            throw new Error("request failed")
        }

        return response.data;
    } catch (e) {
        throw e
    }

}
