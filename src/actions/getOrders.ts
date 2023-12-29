import {AxiosResponse} from "axios";
import $api, {URL} from "./index";



export async function getOrders() {
    try {
        const token: string = `Bearer ${localStorage.getItem("token")}`

        const response: AxiosResponse = await $api.get(URL + "/orders", {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
            }
        })

        if (response.status !== 200) {
            throw new Error("request failed")
        }

        return response.data as any[];
    } catch (e) {
        throw e
    }

}
