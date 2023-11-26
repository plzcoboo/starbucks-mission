const MenuItem = ({item,onview}) => {
    const {name, isClass,id, category} = item;
    return (
        <li onClick={()=>onview(name,id,category)}className={isClass === true ? 'on':''}>{name} </li>
    );
};

export default MenuItem;