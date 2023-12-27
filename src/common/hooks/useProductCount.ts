import {useQuery} from "@tanstack/react-query";
import { productsCount} from "../../actions/products";
import {IProduct} from "../types/interfaces";

export const useProductCount = (count:number) => {
    return useQuery({
        queryKey: ["getProducts count",count],
        queryFn: async () => {
            return await productsCount(count) as IProduct[]
        }
    })
};
