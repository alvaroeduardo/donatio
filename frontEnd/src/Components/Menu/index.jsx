import React from 'react';
import './style.css';

import MenuButton from '../MenuButton';

import Home from '../../Images/Icons/home.svg';
import Donatio from '../../Images/Icons/donatio.svg';
import Sair from '../../Images/Icons/Sair.svg';

function Menu() {
    return (
        <div className='menuContainerComponent'>
            <h1>DONATIO</h1>

                <MenuButton Title="Início" Icon={Home} StyleType="menuButtonContainer"/>
                <MenuButton Title="Realizar Doação" Icon={Donatio} StyleType="menuButtonContainer"/>

                <MenuButton Title="Sair" Icon={Sair} StyleType="menuButtonContainer getOut"/>
        </div>
    );
}

export default Menu;