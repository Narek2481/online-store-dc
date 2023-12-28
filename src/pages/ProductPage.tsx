import {ProductBody} from "../components/product-page/ProductBody";
import "../styles/product-page/ProductPage.scss"
import {useParams} from "react-router-dom";
import {useProducts} from "../common/hooks/useProducts";
import {SliderForProducts} from "../components/layout/SliderForProducts";
import React, { useLayoutEffect, useState} from "react";
import {IProduct} from "../common/types/interfaces";

export const ProductPage = () => {
    const [products, setProducts] = useState<IProduct[]>()
    const {categoryId} = useParams()

    const {data} = useProducts()
    useLayoutEffect(() => {
        if (!!data) {
            const product = data.filter(elem => elem.category._id === categoryId)
            setProducts(product)
        }
    }, [setProducts, categoryId, data]);
    return (
        <div className="productMore">
            <div className="flex">
                <ProductBody/>
            </div>
            <div className="sliderContainer">

                {

                    products && products.length > 2 && <>
                        <h2 className="sliderTitle">Also You May Like</h2>
                        <SliderForProducts products={products}/>
                    </>
                }
            </div>
        </div>

    );
};
