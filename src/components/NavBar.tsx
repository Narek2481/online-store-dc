import {NavLink} from "react-router-dom";
import "../styles/NavBar.scss"
import {FC} from "react";

interface links {
    text:string;
    path:string;
    id:number
}

interface NavBarProps {
    links:links[]
}


export const NavBar:FC<NavBarProps> = ({links}) => {
    return (
        <nav>
            <div>
                {
                    links.map(({text,path,id}) => (
                        <NavLink to={path} key={id} >
                            {text}
                        </NavLink>
                    ))
                }
            </div>
        </nav>
    );
};
