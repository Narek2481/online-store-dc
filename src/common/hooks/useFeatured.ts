import {useQuery} from "@tanstack/react-query";
import {IProduct} from "../types/interfaces";
import {featured} from "../../actions/featured";

export const useFeatured = () => {
    return useQuery({
        queryKey: ["Featured"],
        queryFn: async () => {
            return await featured() as IProduct[]
        }
    })
};
