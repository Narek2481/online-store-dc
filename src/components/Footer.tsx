import "../styles/Footer.scss"


export const Footer = () => {
    return (
        <footer>
            <div className="footerInfo">
                <div className="firstContainerInFooter">
                    <h2>BRAND NAME</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <a href="tel:+12 3 0000 0000">121 king street, Melbourne 3000</a>
                    <a href="tel:+12 3 0000 0000" >+12 3 0000 0000</a>
                    <a href="https://contact@brandemail.com">contact@brandemail.com</a>
                    <div className="flex socialMedia">
                        <a href="https://www.facebook.com/">
                            <img src="/assets/images/facebook-footer.png" alt=""/>
                        </a>
                        <a href="https://www.twitter.com/">
                            <img src="/assets/images/twitter.png" alt=""/>
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src="/assets/images/instagram.png" alt=""/>
                        </a>
                        <a href="https://www.youtube.com/">
                            <img src="/assets/images/youtube.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="secondContainerInFooter">
                    <h3>SHOPPING</h3>
                    <p>Your cart</p>
                    <p>Your orders</p>
                    <p>Compared items</p>
                    <p>Wishlist items</p>
                    <p>Shipping detail </p>
                </div>
                <div className="secondContainerInFooter">
                    <h3>MORE LINK</h3>
                    <p>Blog</p>
                    <p>Gift Center</p>
                    <p>Buying Guides</p>
                    <p>New Arrivals</p>
                    <p>Clearance </p>
                </div>
                <div className="lastContainerInFooter">
                    <h2>
                        PROMO UPDATE
                    </h2>
                    <p>
                        <span>
                            <span>14 </span>
                        May
                        </span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span className="comments">
                            3 comments
                        </span>
                    </p>
                    <div>
                        <span>
                            <span>15</span>
                            July
                        </span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <span className="comments">
                                3 comments
                            </span>
                        </p>
                    </div>

                </div>
            </div>
            <div className="registeredName">
                Brand Registered Name © – All rights reserved
            </div>
        </footer>
    );
};
