import {useGetOrders} from "../common/hooks/useGetOrders";
import {OrdersCard} from "../components/orders/OrdersCard";
import {Fragment, memo} from "react";
import "../styles/order-history/OrderHistory.scss"

export const OrdersHistory = memo(() => {
    const {data} = useGetOrders()

    console.log(data)
    return (
        <div className="orderHistory">
            {
                !!data && data?.map(elem => {
                    console.log(elem.orderItems[0]?.product)
                    return (
                        <Fragment key={elem._id}>
                            {elem.orderItems[0] ?  <OrdersCard product={elem.orderItems[0]?.product} />:<></>}
                        </Fragment>
                    )
                })
            }
            {/*{*/}
            {/*    !!data && data.map(elem => {*/}
            {/*        // @ts-ignore*/}
            {/*        return <Fragment key={elem.id}>*/}
            {/*            {*/}
            {/*                !!elem.orderItems[0].product.image && <UniversalProducts text={} img={elem.orderItems[0].product.image as string}/>*/}
            {/*            }*/}
            {/*        </Fragment>*/}
            {/*    })*/}
            {/*}*/}
            {/*{*/}
            {/*   !!data && data.map((datum,i) => (*/}
            {/*        <div key={i}>*/}
            {/*            {`${datum.orderItems[0].product}`}*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*}*/}
            {/*{data && JSON.stringify(data[0].orderItems[0].product,null,5)}*/}
        </div>
    );
});
