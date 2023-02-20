import React from 'react'

const Navbar = ({filterItem,menuList,Menu}) => {
  return (
    <>
        <nav class="navbar">
        <div className="btn-group">
            {
              menuList.map((curElem) =>{
                return(
                    <button className='btn-group__item' onClick={()=>filterItem(curElem)}>{curElem}</button>
                )
              })  
            }
          <button className='btn-group__item' onClick={()=>filterItem(Menu)}>All</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
