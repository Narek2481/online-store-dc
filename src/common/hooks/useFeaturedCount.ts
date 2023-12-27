import {useQuery} from "@tanstack/react-query";
import { featuredCount} from "../../actions/featured";

export const useFeaturedCount = (count:number) => {
    return useQuery({
        queryKey:["useFeaturedCount",count],
        queryFn:() => featuredCount(count)
    })
};
