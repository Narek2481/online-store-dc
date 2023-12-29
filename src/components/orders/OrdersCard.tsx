import {FC, memo} from "react";
import {IProduct} from "../../common/types/interfaces";

interface productPrice extends IProduct {
    count?: string
}

interface OrdersCardProps {
    product: productPrice
}


export const OrdersCard: FC<OrdersCardProps> = memo(({product}) => {
    console.log(product)
    const {image, price, name} = product
    return (
        <div className="flex card ">
            <img src={image} alt=""/>
            <div className="infoForProductCard">
                <h4>{name}</h4>
                <span>{price} $</span>

            </div>
        </div>
    );
});
