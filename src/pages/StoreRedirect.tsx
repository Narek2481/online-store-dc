import {useCategory} from "../common/hooks/useCategory";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const StoreRedirect = () => {
    const {data} =  useCategory()

    const navigate =   useNavigate()
    useEffect(() => {
        if (data) {
            navigate("/store/"+data[0]._id)
        }
    }, [data,navigate]);
    return (
        <></>
    );
};
