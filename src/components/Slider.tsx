import "../styles/Slider.scss"
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Item = () => {
    return (
        <div className="flex sliderItem">
            <div>
                <img src="/assets/images/slider-image.png" alt=""/>
            </div>
            <div>
                <p>HOT DEALS THIS WEEK</p>
                <h2>
                    <span>SALE 50% OFF</span>
                    MODERN FURNITURE
                </h2>
                <button>VIEW NOW</button>
            </div>
        </div>
    )
}


export const Slider = () => {

    return (
        <div className="sliderContainer">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showArrows={true}
                showStatus={false}
                showThumbs={false}
            >
                <Item/>
                <Item/>
                <Item/>
            </Carousel>
        </div>
    );
}
