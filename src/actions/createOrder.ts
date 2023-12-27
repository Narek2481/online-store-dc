import {IProductForOrder} from "../common/types/interfaces";
import $api, {URL} from "./index";


export default async function createOrder(body: IProductForOrder) {
    try {
        const response = await $api.post(URL + "/orders", {
            ...body,
            shippingAddress1: "No 45,Park Street",
            shippingAddress2: "No 46,Main Street",
            city: "Colombo",
            zip: "10600t",
            country: "Sri Lanka",
            phone: "+94717185748",
            user: "602e9b718e700335d8532b13"
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
