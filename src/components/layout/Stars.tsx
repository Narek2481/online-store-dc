import "../../styles/layout/Stars.scss"
import {FC} from "react";

interface StarsProps{
    rating:string
}

export const Stars:FC<StarsProps> = ({rating}) => {

    const style = {
        width:`${(+rating)/0.05}%`
    }
    return (
        <div className="rating">
            <div className="rating_body">
                <div className="rating_active" style={style}>

                </div>
                <div className="rating_items">
                    <input type="radio" className="rating_item"/>
                    <input type="radio" className="rating_item"/>
                    <input type="radio" className="rating_item"/>
                    <input type="radio" className="rating_item"/>
                    <input type="radio" className="rating_item"/>
                </div>
            </div>
        </div>
    );
};
