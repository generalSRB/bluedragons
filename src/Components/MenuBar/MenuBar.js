import React from 'react';

import MenuItems from '../MenuItems/MenuItems';
import './MenuBar.css';


const MenuBar = () => {
    return (
        <div className='menu-wrapper'>
            <div className='menuBar'>
                
                <MenuItems />
            </div>
        </div>
            
    )
}

export default MenuBar;