import {Search} from "../components/Search";
import {Support} from "../components/Support";
import {Slider} from "../components/Slider";
import {TopRating} from "../components/TopRating";





export const Home = () => {
    return (
        <>
            <Search/>
            <Support/>
            <Slider/>
            {/*<Bedsheet/>*/}
            {/*<Newsletter/>*/}
            {/*<PremiumMember/>*/}
            <div className="price">

            </div>
            <TopRating/>
        </>
    );
};
