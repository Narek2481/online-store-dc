import "../../styles/home/Search.scss"


export const Search = () => {
    return (
        <div className="flex jc-center searchContainer">
            <div className="search">
                <img src="/assets/images/searchIcon.png" alt=""/>
                <input type="text"/>
            </div>
            <button>Search</button>
        </div>
    );
};
