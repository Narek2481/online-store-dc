import {FC} from "react";

interface UniversalProductsProps {
    text: string;
    img: any;
    rating: number;
    price: string;
    id:number
}


export const UniversalProducts: FC<UniversalProductsProps> = (
    {
        text,
        img,
        rating,
        price,
        id
    }
) => {
    return (
        <div className="product" key={id}>
            <img src={img} alt=""/>
            <div>
                <h3>{text}</h3>
                <div>{rating}</div>
                <span>{price}</span>
            </div>
        </div>
    );
};
