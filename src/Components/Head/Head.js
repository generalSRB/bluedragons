import React, {Fragment} from 'react';

import headImg from '../../Images/headlogo.png';
import './Head.css'

const styles = {
    
    image: {
        width: '600px',
        maxWidth: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center'    
    }
    
}

const Head = () => {
    return (
        <Fragment >
            <div>
                <img src={headImg} alt='bluedragons_logo' style={styles.image}/>
            </div>
        </Fragment>
    )
} 

export {Head};