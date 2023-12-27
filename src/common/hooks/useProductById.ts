import {useQuery} from "@tanstack/react-query";
import {productsGetById} from "../../actions/products";

export const useProductById = (id:string) => {
    return useQuery({
        queryKey:["productId",id],
        queryFn:() => {
            return productsGetById(id)
        }
    })
};
