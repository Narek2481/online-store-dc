import React, {FC, Fragment, useEffect, useState} from 'react';
import {UniversalProducts} from "./UniversalProducts";
import {IProduct} from "../../common/types/interfaces";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

interface MyCarouselProps {
    products: IProduct[]
}


export const SliderForProducts: FC<MyCarouselProps> = ({products}) => {
    const [settings, setSettings] = useState<object>({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    })

    useEffect(() => {
        if (products.length >= 4) {
            setSettings(prevState => {
                return {...prevState, slidesToShow: 4}
            })

        } else {
            setSettings((prevState) => {
                return {...prevState, slidesToShow: products.length - 1}
            })
        }
    }, [setSettings, products]);
    return (
        <div>
            <Slider {...settings} >
                {products.map((elem) => {
                    const categoryId:string =  String(elem.category._id)
                    return (
                        <Fragment key={products.indexOf(elem) + elem.id}>
                            <UniversalProducts
                                text={elem.name}
                                img={elem.image}
                                id={elem.id}
                                where={"RATING"}
                                classNameForProps="productForSlider"
                                categoryId={categoryId}

                            />
                        </Fragment>
                    )
                })}
            </Slider>
        </div>
    )
};
