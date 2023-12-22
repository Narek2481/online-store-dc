import {Search} from "../components/layout/Search";
import {Support} from "../components/home/Support";
import {Slider} from "../components/home/Slider";
import {TopRating} from "../components/home/TopRating";
import {CategoriesHeader} from "../components/home/CategoriesHeader";
import {CategoriesBody} from "../components/home/CategoriesBody";
import {Bedsheet} from "../components/home/Bedsheet";
import {useAuth} from "../common/hooks/useAuth";
import {Newsletter} from "../components/home/Newsletter";






export const Home = () => {
    const {token} = useAuth()


    console.log(token)
    return (
        <>
            <Search/>
            <Support/>
            <Slider/>
            <CategoriesHeader/>
            <CategoriesBody/>
            <Bedsheet/>
            <TopRating/>
            <Newsletter/>
        </>
    );
};
