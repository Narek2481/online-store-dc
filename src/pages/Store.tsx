import {ProductCategoryContainer} from "../components/store/ProductCategoryContainer";
import {Search} from "../components/layout/Search";
import {PremiumMember} from "../components/store/PremiumMember";

export const Store = () => {
    return (
        <>
            <Search/>
            <PremiumMember/>
            <ProductCategoryContainer/>
        </>
    );
};
