import React from 'react';
import '../../globalStyle.css';
import './style.css';

import Button from '../../Components/Button';

import ImageIndex from '../../Images/ImageIndex.svg';

function mostraAlerta(){
    alert("OLá mundo");
}

function index() {
    return (
        <div className='indexContainer'>
            <Button 
                Action={mostraAlerta} 
                Title={"Entrar"} 
                StyleType={"whiteStyle buttonLogin"}
            />

            <div className='dataIndexContainer'>
                <div className='dataTextIndexContainer'>
                    <h1>DONATIO</h1>
                    <p>Plataforma de doação de Lagoa da Prata-MG</p>
                </div>

                <img src={ ImageIndex } className="imageIndexContainer" />
            </div>
        </div>
    )
}

export default index;