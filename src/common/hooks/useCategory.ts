import {useQuery} from "@tanstack/react-query";
import {categoryGet} from "../../actions/categoryGet";

export const useCategory = () => {
    return useQuery({
        queryKey: ["getCategories"],
        queryFn: async () => {
            return categoryGet()
        }
    })
};
