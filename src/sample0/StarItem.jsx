import { useState } from "react";
import Popup from "./Popup";

const StarItem = ({item,menus}) => {
    const {title,price,img,desc,name,id} = item
    const [isOpen , setIsOpen] = useState(false)
    const onOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <li onClick={onOpen}>
            <img src={img} alt=""/>
            <h3>{title}</h3>
            <h2>{name}</h2>
            <p>가격 : {price}</p>
            <p>정보 : {desc}</p>
            {isOpen && <Popup item={item} setIsOpen={setIsOpen}/>}
        </li>
        </>
    );
};

export default StarItem;