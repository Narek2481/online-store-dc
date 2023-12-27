import {useParams} from "react-router-dom";
import {useProducts} from "../../common/hooks/useProducts";
import {useCategory} from "../../common/hooks/useCategory";
import {Loader} from "../layout/Loader";
import {Category} from "./Category";
import {useEffect, useState} from "react";
import {IProduct} from "../../common/types/interfaces";
import {UniversalProducts} from "../layout/UniversalProducts";
import "../../styles/store/ProductCategoryContainer.scss"


export const ProductCategoryContainer = () => {
    const {id} = useParams()
    const {data: products, isLoading: isProduct} = useProducts()
    const {data: categories, isLoading: isCategory} = useCategory()
    const [productsForId, setProductsForId] = useState<null | IProduct[]>(null)

    useEffect(() => {
        if (products) {

            setProductsForId(products.filter((elem) => elem.category._id === id
            ))
        }
    }, [isProduct, setProductsForId, products, id])



    if (isCategory || isCategory) {
        return <Loader/>
    }

    return (
        <>

            <div className="productCategoryContainer">
                {/*<h2 className="nowCategory">{name}</h2>*/}
                <div className="categoryTitle">
                    <h3>Categories</h3>
                    {
                        categories?.map(elem => (
                            <Category key={elem._id} name={elem.name} isActive={id === elem._id} id={elem._id}/>
                        ))
                    }
                </div>
                <div className="bedroom">
                    {
                        productsForId?.length === 0 ? "isEmpty" : productsForId?.map(
                            ({
                                 image,
                                 id,
                                 name,
                                 rating,
                                 price, category
                             }) => (
                                <UniversalProducts
                                    key={id}
                                    text={name}
                                    img={image}
                                    where={"BEDROOM"}
                                    rating={rating}
                                    price={price}
                                    categoryId={category._id}
                                    id={id}
                                />
                            ))
                    }
                </div>
            </div>
            <button
                className="topRatingButton"
                // onClick={handleLoadMore}
                // style={{display: data?.length === topData?.length ? "none" : ""}}
            >load more
            </button>
        </>
    );
};
