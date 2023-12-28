import {useNavigate, useParams} from "react-router-dom";
import {useProductById} from "../../common/hooks/useProductById";
import {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {bagAtom} from "../../context/atom";

export const ProductBody = () => {
    const navigate = useNavigate()
    const [bagInfo, setBegInfo] = useAtom(bagAtom);
    const {id} = useParams()
    const {data} = useProductById(id as string)
    const [images, setImages] = useState<any[]>([])
    const [selectes, setSelectes] = useState<any[]>([])
    const [valueSelect, setValueSelect] = useState<string | number>("COUNT")

    useEffect(() => {
        if (!!data && data.images[0]) {

            setImages(JSON.parse(data.images[0]) as any[])
        }
    }, [data])

    useEffect(() => {
        if (data) {
            setSelectes([...Array(data.countInStock)])
        }
    }, [data]);

    const addToCard = () => {
        if (id && data) {
            let coincidence: boolean = false


            const newState = bagInfo.map((elem) => {
                if (elem.orderItems.product === id) {
                    coincidence = true
                    let quantity =  Number(elem.orderItems.quantity)
                    let value = valueSelect === "COUNT" ? 1 : valueSelect
                    quantity+= value as number
                    elem.orderItems.quantity =  String(quantity)
                }
                return elem
            })

            if (coincidence) {
                setBegInfo(newState)
                localStorage.setItem("bag", JSON.stringify(newState))
            }else {
                newState.push({
                    orderItems: {
                        product: id,
                        price: String(data.price),
                        quantity: valueSelect === "COUNT" ? "1" : String(valueSelect)
                    }
                })
                setBegInfo(newState)
                localStorage.setItem("bag",JSON.stringify(newState))
            }


        }
        navigate("/shopping_bag")
    }

    console.log(images[0])
    return (
        <>
            <div className="oneProduct">
                <div>
                    {!!data && <img className="rootImage" src={data.image} alt=""/>}
                    <div className="imagesContainer">
                        {
                            images.length > 0 && images.map((elem: string) => {

                                    return <img
                                        src={elem} alt=""
                                        key={Date.now() + Math.random()}
                                        className="images"
                                    />
                            })
                        }
                    </div>
                    <div className="yellowContainerDescription">
                        {!!data && <div>
                            <h4>
                                Details
                            </h4>
                            <p>{data.description}</p>
                            <p>{data.richDescription}</p>
                            <p className="">Art. No. - {data.id}</p>
                        </div>}
                    </div>
                </div>
                <div className="rightContainer">
                    <h2>{!!data && data.name}</h2>
                    <span>{!!data && data.price} $</span>
                    {!!data && <img src={data.image} alt=""/>}

                    <select
                        className="productSelect"
                        value={valueSelect}
                        onChange={(event) => setValueSelect(+event.target.value)}
                    >
                        <option value={"COUNT"}>COUNT</option>
                        {!!selectes && selectes.map((_, index) => {
                            return <option key={Date.now() + index} value={index + 1}>{index + 1}</option>
                        })}
                    </select>
                    <div className="flex">
                        <button onClick={() => navigate(-1)}>Go back</button>
                        <button onClick={addToCard}>Add to CART</button>
                    </div>
                </div>
            </div>
        </>
    );
};
