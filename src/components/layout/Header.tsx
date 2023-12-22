import "../../styles/layout/Header.scss"
import {NavBar} from "../home/NavBar";
import {useNavigate} from "react-router-dom";

const links = [
    {
        id: Date.now() + Math.random(),
        path: "home",
        text: "HOME"
    },
    {
        id: Date.now() + Math.random(),
        path: "/store",
        text: "STORE"
    },
    {
        id: Date.now() + Math.random(),
        path: "",
        text: "CATEGORIES"
    },
    {
        id: Date.now() + Math.random(),
        path: "",
        text: "PAGES"
    },
    {
        id: Date.now() + Math.random(),
        path: "",
        text: "BRAND"
    },
    {
        id: Date.now() + Math.random(),
        path: "",
        text: "ABOUT US"
    },
    {
        id: Date.now() + Math.random(),
        path: "",
        text: "NEWS"
    },
    {
        id: Date.now() + Math.random(),
        path: "",
        text: "CONTACT US "
    }
]

export const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="header-container">
                <div className="flex ai-center jc-start gap-1">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt=""/>
                    <h2>BRAND NAME</h2>
                </div>

                <div className="flex jc-end ai-center gap-1">
                    <img
                        className="header-images"
                        src="/assets/images/user.svg" alt=""
                        onClick={() => navigate("/login")}
                    />
                    <img
                        className="header-images"
                        src='/assets/images/basket.png' alt=""
                    />
                    <img
                        className="header-images"
                        src='/assets/images/hamburger-menu.png' alt=""
                    />

                </div>
            </div>
            <NavBar links={links}/>
        </>
    );
};
