import "../../styles/layout/Header.scss"
import {NavBar} from "../home/NavBar";
import {Link, useNavigate} from "react-router-dom";
import {useAuthAtom} from "../../common/hooks/useAuthAtom";
import {useAtom} from "jotai";
import {bagAtom} from "../../context/atom";

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
    const {auth, setAuth} = useAuthAtom()
    const [bagInfo] = useAtom(bagAtom)

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
                        onClick={() => {
                            if (auth) {
                                setAuth(null)
                                localStorage.removeItem("token")
                            }

                            navigate("/login")
                        }}
                    />
                    <Link to="/shopping_bag">

                        <img
                            className="header-images"
                            src='/assets/images/basket.png' alt=""
                        />
                    </Link>
                    {
                        bagInfo.length > 0 &&
                        <Link
                            to="/shopping_bag"
                            className="bagInfoLength"

                        >
                            {bagInfo.length}
                        </Link>
                    }
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
