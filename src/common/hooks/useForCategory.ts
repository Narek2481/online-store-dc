import {useQuery} from "@tanstack/react-query";
import {categoryGetById} from "../../actions/categoryGet";

export const useForCategory = (id:string) => {
    return useQuery({
        queryKey:["categoryById",id],
        queryFn:() => categoryGetById(id)
    })
};
