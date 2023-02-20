import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './menuCard'
import Navbar from './Navbar'

const uniqueList = [ ...new Set(Menu.map((curElem) => {
    return curElem.category;
}))];
console.log(uniqueList);

const Restaurant = () => {
  // const [menuData, setMenuData] = React.useState(Menu);
  const [menuData, setMenuData] = useState(Menu);
  // console.log(menuData); // console.log(setMenuData);
  // const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (type) => {
    if(type===Menu) setMenuData(Menu);
    else{
      const updatedList = Menu.filter((curElem) => {
        return type === curElem.category;
      })
      setMenuData(updatedList);
    }
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={uniqueList} Menu={Menu} />
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant;