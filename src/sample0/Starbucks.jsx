import { useEffect, useRef, useState } from 'react';
import StarList from './StarList';
import starbucksData from '../assets/api/starbucksData';
import './style.scss';
import MenuCheck from './MenuCheck,';

const Starbucks = () => {
    const [data, setData] = useState(starbucksData)
    const [menus , setMenus] = useState([
        {id:0,name:'Cold Brew',category:'Cold Brew', isClass:false},
        {id:1,name:'Espresso',category:'Espresso', isClass:false},
        {id:2,name:'Frappuccino',category:'Frappuccino', isClass:false},
        {id:3,name:'Fizzio',category:'Fizzio', isClass:false},
    ])

    useEffect(()=>{
        setMenus(menus.map(item =>{return {...item,isClass:true}}))
    },[])

 
    return (
        <div className='starbucks'>
            <h1>starbucks Menu</h1>
            {/* <MenuList menus={menus} onview={onview}/> */}
            <MenuCheck menus={menus} setMenus={setMenus}/>
            <StarList data={data}menus={menus}/>
        </div>
    );
};

export default Starbucks;