import React from 'react';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar'
import brandImage from '../../Images/BlueHead.png'


const Brand = () => {
    return (
        <div className='logo'>
            <Navbar.Brand>
                <Image src={brandImage} alt='bluedragon_logo' rounded />
            </Navbar.Brand>
        </div>
    )  
}

export default Brand;