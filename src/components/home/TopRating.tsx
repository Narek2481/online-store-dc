import "../../styles/home/TopRating.scss"
import {UniversalProducts} from "../layout/UniversalProducts";
import {Fragment, useEffect, useState} from "react";
import {useProducts} from "../../common/hooks/useProducts";
import {IProduct} from "../../common/types/interfaces";


export const TopRating = () => {
    const {data} = useProducts()
    const [topData, setTopData] = useState<IProduct[] | null>(null)
    useEffect(() => {
        if (data) {
            setTopData(data.sort((prev, next) => +next.rating - (+prev.rating)))
        }
    }, [data]);

    return (
        <>
            <div className="topRating">
                {
                    !!topData && topData.map(elem => (
                        <Fragment key={elem.id}>
                            <UniversalProducts
                                rating={elem.rating}
                                text={elem.name}
                                img={elem.image}
                                price={elem.price}
                                where={"RATING"}
                                categoryId={elem.category._id}
                                id={elem.id}
                            />

                        </Fragment>
                    ))
                }
            </div>
            <button className="topRatingButton">load more</button>

        </>
    );
};
