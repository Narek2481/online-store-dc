import {FC} from "react";
import {useNavigate} from "react-router-dom";


interface category {
    name: string;
    isActive: boolean;
    id: string
}


export const Category: FC<category> = ({name, isActive, id}) => {
    const navigate = useNavigate()

    return (
        <p
            className={isActive ? "active" : ""}
            onClick={() => navigate("/store/" + id)}
        >
            {
                name
            }
        </p>
    );
};
