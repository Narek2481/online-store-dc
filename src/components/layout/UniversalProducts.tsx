import {FC} from "react";
import "../../styles/layout/UniversalProducts.scss"
import {useNavigate} from "react-router-dom";
import {Stars} from "./Stars";


interface UniversalProductsProps {
    text: string;
    img: any;
    rating?: string;
    price?: number;
    id?: string;
    where?: "BEDROOM" | "RATING";
    categoryId?: string
}


export const UniversalProducts: FC<UniversalProductsProps> = (
    {
        text,
        img,
        rating,
        price,
        id,
        where,
        categoryId
    }
) => {
    const className = where === "RATING" ? "rating" : "bedroom";
    const navigate = useNavigate()
    return (
        <div
            className={`product ${className}Small`}
            key={id}
            onClick={!(where === "RATING" || where === "BEDROOM") ?
                () => navigate("/store/" + id) :
                () => navigate("/store/" + id + "/" + categoryId)}
        >
            <img src={img} alt=""/>
            <div>
                <h3>{text}</h3>
                {!!rating && <Stars rating={rating}/>}
                {!!price && <span>{price}$</span>}
            </div>
        </div>
    );
};
