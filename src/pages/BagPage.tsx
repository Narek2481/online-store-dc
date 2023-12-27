
import "../styles/bag/BagPage.scss"
import {ProductContainerInBag} from "../components/bag/ProductContainerInBag";


export const BagPage = () => {


    return (
        <div className="bagContainer">
            <h2>
                Shopping <br/>
                CART
            </h2>
            <ProductContainerInBag/>
        </div>
    );
};
