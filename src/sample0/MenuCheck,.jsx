import React, { useState } from 'react';

const MenuCheck = ({menus,setMenus,onview}) => {
    const changeInput = (e) => {
        const {name , checked ,id} = e.target
        if(name === 'All') {
            setMenus(menus.map(item =>{return {...item,isClass:checked}}))
        }else {
            setMenus(menus.map(item => item.name === name ? {...item , isClass:checked} : item))
        }
    }    
    
    return (
        <div className='menu'>
            <p>
                <input type="checkbox" name='All' id='All' value='전체'onChange={changeInput} checked={menus.filter(item => item.isClass !== true).length < 1 ? true : false}/>
                <label htmlFor="All">전체</label>
            </p>

            {menus.map(item => <p key={item.id}>
                <input type="checkbox" name={item.name} id={item.id} value={item.category} checked={item.isClass} onChange={changeInput}/>
                <label htmlFor={item.name}>{item.name}</label>
            </p>)}
            
        </div>
    );
};

export default MenuCheck;