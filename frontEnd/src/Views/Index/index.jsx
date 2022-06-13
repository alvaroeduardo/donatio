import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../globalStyle.css';
import './style.css';

import Button from '../../Components/Button';

import ImageIndex from '../../Images/ImageIndex.svg';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '5rem',
        borderRadius: '50px',
        border: 'none'
    },
};

function index() {
    const [stateModal, setStateModal] = useState(false);

    const modalFunctions = {
        open(){
            setStateModal(true);
        },

        close(){
            setStateModal(false);
        }
    }

    return (
        <div className='indexContainer'>
            <Button 
                Action={modalFunctions.open} 
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

            <Modal
                isOpen={stateModal}
                onRequestClose={modalFunctions.close}
                style={customStyles}
            >
                <div className='loginFormContainer'>
                    <h1 className="titleLogin">Donatio</h1>
                    <h2 className="title">Login</h2>
                    <p className="loginDescription">Entre para acessar a página principal</p>
                </div>
            </Modal>
        </div>
    )
}

export default index;