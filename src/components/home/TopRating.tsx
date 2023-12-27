import "../../styles/home/TopRating.scss"
import {UniversalProducts} from "../layout/UniversalProducts";
import {Fragment, useState} from "react";
import {useFeaturedCount} from "../../common/hooks/useFeaturedCount";


export const TopRating = () => {
    const [count, setCount] = useState(3)
    const {data} = useFeaturedCount(count)

   const handleLoadMore =  ()  => {
       setCount(prevState => prevState+3)
    }

    return (
        <>
            <h2 className="Rate">TOP RATING</h2>
            <div className="topRating">
                {
                    !!data && data.map((elem:any) => (
                        <Fragment key={elem.id}>
                            <UniversalProducts
                                rating={elem.rating}
                                text={elem.name}
                                img={elem.image}
                                price={elem.price}
                                where={"RATING"}
                                categoryId={elem.category}
                                id={elem.id}
                            />

                        </Fragment>
                    ))
                }
            </div>
            <button
                className="topRatingButton"
                onClick={handleLoadMore}
            >load more</button>

        </>
    );
};
