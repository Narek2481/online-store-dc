import {useMutation} from "@tanstack/react-query";
import createOrder from "../../actions/createOrder";
import {IProductForOrder} from "../types/interfaces";

export const useCreateOrder = () => {
    return useMutation({
        mutationKey:["create order"],
        mutationFn:(body:IProductForOrder) => {
            return createOrder(body)
        }
    })
};
