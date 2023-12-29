import {useGetOrders} from "../common/hooks/useGetOrders";
import {OrdersCard} from "../components/orders/OrdersCard";
import {Fragment, memo, useEffect, useState} from "react";
import "../styles/order-history/OrderHistory.scss"

export const OrdersHistory = memo(() => {
    const [dataForMap, setDataForMap] = useState<any[]>([])
    const {data} = useGetOrders()
    useEffect(() => {
        let arr:any[] = []
        if (data){
            data.forEach(elem => {
                console.log(elem.orderItems)
               arr =  arr.concat(elem.orderItems)
            })
        }
        setDataForMap(arr)
    }, [data]);

    return (
        <div className="orderHistory">
            {
                dataForMap.map(elem => {
                    return (
                        <Fragment key={elem._id}>
                            <OrdersCard product={elem.product}/>
                        </Fragment>
                    )
                })
            }
        </div>
    );
});
