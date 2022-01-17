import React, { useState } from 'react'
import Menu from './MenuApi'

const NavMenu = ({ filterItem, menuList }) => {

    const [menuData, setMenuData] = useState(Menu);

    
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>

                    {
                        menuList.map((curElem) => {
                            return(
                                <button 
                                className='btn-group__item' 
                                onClick={()=>filterItem(curElem)}>
                                    {curElem}
                                </button>
                            );
                        })
                    }
                </div>
            </nav>
        </>
    )
}

export default NavMenu
