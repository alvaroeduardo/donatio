import React from 'react';
import '../../globalStyle.css';
import './style.css';

function Main(props) {
    
    return (
        <div className='containerMain'>
            {props.children}
        </div>
    );
}

export default Main;