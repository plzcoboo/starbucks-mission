import StarItem from "./StarItem";

const StarList = ({data,popUp,menus}) => {

    return (
        <ul className="list">
            {menus[0].isClass && data.map((item) => item.name === menus[0].category && <StarItem item={item} key={item.id} popUp={popUp} menus={menus}/>)}
            {menus[1].isClass && data.map((item) => item.name === menus[1].category && <StarItem item={item} key={item.id} popUp={popUp} menus={menus}/>)}
            {menus[2].isClass && data.map((item) => item.name === menus[2].category && <StarItem item={item} key={item.id} popUp={popUp} menus={menus}/>)}
            {menus[3].isClass && data.map((item) => item.name === menus[3].category && <StarItem item={item} key={item.id} popUp={popUp} menus={menus}/>)}
        </ul>
    );
};

export default StarList;