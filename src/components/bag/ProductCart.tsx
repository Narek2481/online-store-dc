import {FC, memo, useEffect, useState} from "react";
import {useProductById} from "../../common/hooks/useProductById";
import {useAtom} from "jotai";
import {bagAtom} from "../../context/atom";

interface ProductCartProps {
    count: string;
    id: string;
    price: string;
}


export const ProductCart: FC<ProductCartProps> = memo(({id, count, price}) => {
    const [bagInfo, setBegInfo] = useAtom(bagAtom);
    const {data} = useProductById(id)
    const [value, setValue] = useState(String(count))
    const [selectes, setSelectes] = useState<any[]>()
    useEffect(() => {
        if (!!data && data.countInStock) {
            console.log(data.countInStock)
            setSelectes([...Array(data.countInStock)])
        }
    }, [data])
    return (
        !!data ?
            <div className="flex card ">
                <img src={data.image} alt=""/>
                <div className="infoForProductCard">
                    <h4>{data.name}</h4>
                    <span>{data.price} $</span>
                    <select
                        className="inBagSelect"
                        value={value}
                        onChange={({target}) => {
                            setValue(target.value)
                            const newState = bagInfo.map(elem => {
                                if (elem.orderItems.product === id) {
                                    return {
                                        orderItems: {
                                            ...elem.orderItems,
                                            quantity: target.value
                                        }
                                    }
                                }
                                return elem
                            })
                            setBegInfo(newState)
                            localStorage.setItem("bag", JSON.stringify(newState))
                        }}
                    >
                        {!!selectes && selectes.map((_, index) => {
                            return <option key={Date.now() + index} value={index + 1}>{index + 1}</option>
                        })}
                    </select>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    onClick={() => {
                        // @ts-ignore
                        setBegInfo(bagInfo.filter((value) => value.orderItems.product !== id))
                        localStorage.setItem("bag", JSON.stringify(bagInfo.filter((value) => value.orderItems.product !== id)))
                    }}
                >
                    <path d="M1 1L17.3167 17.3167" stroke="#323334"/>
                    <path d="M17.3167 1L0.999998 17.3167" stroke="#323334"/>
                </svg>
            </div>

            : <></>
    );
});
