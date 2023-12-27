import {useQuery} from "@tanstack/react-query";
import {getOrders} from "../../actions/getOrders";

export const useGetOrders = () => {
    return useQuery({
        queryKey:["get orders"],
        queryFn:() => getOrders()
    })
};
