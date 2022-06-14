import React from 'react';
import './style.css'

function MenuButton(props) {
    return (
        <div className={ props.StyleType } onClick={ props.Action }>
            <img src={ props.Icon }/>
            <h1>{ props.Title }</h1>
        </div>
    );
}

export default MenuButton;