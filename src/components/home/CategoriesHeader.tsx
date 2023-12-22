import "../../styles/home/CategoriesHeader.scss"

export const CategoriesHeader = () => {
    return (
        <div className="categoriesHeader">
            <div className="itemOne">
                <div className="flex ai-center">
                    {/*<img src="/assets/images/categorie3.png" alt=""/>*/}
                    <h2>INY VINTAGE CHAIR</h2>
                </div>
            </div>
            <div className="itemTwo">
                <div className="flex ai-center">
                    <img src="/assets/images/categorie2.png" alt=""/>
                    <h2>
                        LARGE TERRACOTA
                        VASE
                    </h2>
                </div>
            </div>
        </div>
    );
};
