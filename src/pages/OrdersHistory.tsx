import {useGetOrders} from "../common/hooks/useGetOrders";
import {OrdersCard} from "../components/orders/OrdersCard";
import {Fragment} from "react";
import "../styles/order-history/OrderHistory.scss"
export const OrdersHistory = () => {
    const {data} = useGetOrders()


    return (
        <div className="orderHistory">
            {
                !!data &&    data.map(elem => {
                    return (
                        <Fragment key={elem.id}>
                        <OrdersCard product={elem.orderItems[0].product}/>
                    </Fragment>
                    )
                })
            }
        </div>
    );
};
