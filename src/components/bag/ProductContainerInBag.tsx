import {ProductCart} from "./ProductCart";
import {Fragment, useEffect, useState} from "react";
import {useFeatured} from "../../common/hooks/useFeatured";
import {SliderForProducts} from "../layout/SliderForProducts";
import {useNavigate} from "react-router-dom";
import {useCreateOrder} from "../../common/hooks/useCreateOrder";
import {IProductForOrder} from "../../common/types/interfaces";
import {useAuthAtom} from "../../common/hooks/useAuthAtom";
import {useAtom} from "jotai";
import {bagAtom} from "../../context/atom";


export const ProductContainerInBag = () => {
    const navigate = useNavigate()
    const {auth:token} = useAuthAtom()
    const [bagInfo,setBegInfo] = useAtom(bagAtom);
    const [orderValue, setOrderValue] = useState<number>(0)
    const {data} = useFeatured()
    const {mutateAsync} = useCreateOrder()
    useEffect(() => {
        setOrderValue(0)
        if (bagInfo){
            bagInfo.map(elem => {
                console.log((elem.orderItems.price),(+elem.orderItems.quantity))
                setOrderValue(prevState => +prevState+(+elem.orderItems.price)*(+elem.orderItems.quantity))
                return elem
            })
        }
    }, [bagInfo]);

    const chackoutHandle = () => {
        if (!!token) {
                mutateAsync({orderItems:bagInfo.map(elem => {
                        return {
                            product:elem.orderItems.product,
                            quantity:elem.orderItems.quantity
                        }
                    })} as IProductForOrder)
            setBegInfo([])
            localStorage.removeItem("bag")
            return navigate("/orders")
        }
        return navigate("/login")
    }


    return (
        <>
            <div className="productContainerInBag">
                <div className="cards">
                    { bagInfo?.length > 0 ? bagInfo?.map((elem) => (
                        <Fragment key={elem.orderItems.product + Date.now()}>
                            <ProductCart
                                id={elem.orderItems.product}
                                count={elem.orderItems.quantity}
                                price={elem.orderItems.price}
                            />
                        </Fragment>
                    )) : "is empty"}
                </div>
                <div className="order">
                    <div className="flex jc-b orderValue">
                        <div>Order value:</div>
                        <div>{orderValue} $</div>
                    </div>
                    <button onClick={chackoutHandle}>Continue to checkout</button>
                </div>
                <div className="totalContainer">
                    <p className="total">Total</p>
                    <p className="totalPrice">{orderValue} $</p>
                </div>
            </div>

            {!!data && <SliderForProducts products={data}/>}
        </>
    );
};
