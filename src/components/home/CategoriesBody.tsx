import {useCategory} from "../../common/hooks/useCategory";
import {UniversalProducts} from "../layout/UniversalProducts";
import {Fragment} from "react";
import {Loader} from "../layout/Loader";
import "../../styles/home/CategoriesBody.scss"

export const CategoriesBody = () => {
    const {data, isLoading} = useCategory()




    return (
        <div className="categoriesBody">
            {
                (!isLoading && !!data)
                    ?
                    (data.length ? data.map(elem => (
                        <Fragment key={elem._id} >
                            <UniversalProducts text={elem.name} img={elem.icon} id={elem._id}/>
                        </Fragment>
                    )) : "data is empty")
                    : <Loader/>
            }
        </div>
    );
};
