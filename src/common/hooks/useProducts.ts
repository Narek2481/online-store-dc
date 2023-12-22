import {useQuery} from "@tanstack/react-query";
import {products} from "../../actions/products";
import {IProduct} from "../types/interfaces";

export const useProducts = () => {
    return useQuery({
        queryKey: ["getProducts"],
        queryFn: async () => {
            return await products() as IProduct[]
        }
    })
};
