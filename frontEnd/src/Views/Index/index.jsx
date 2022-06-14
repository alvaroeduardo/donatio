import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../globalStyle.css';
import './style.css';

import Button from '../../Components/Button';
import Input from '../../Components/Input';

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
        border: 'none',
        width: '1000px'
    },
};

function index() {
    const [stateModal, setStateModal] = useState(false);

    const [cpfValue, setCpfValue] = useState('');
    const [pwdValue, setPwdValue] = useState('');

    const [resCpf, setResCpf] = useState('');
    const [resEmail, setResEmail] = useState('');
    const [resPwd, setResPwd] = useState('');

    const [registerState, setRegisterState] = useState(false);

    const modalFunctions = {
        open(){
            setStateModal(true);
        },

        close(){
            setStateModal(false);
            setRegisterState(false)
        }
    }

    const HandleChange = {
        cpf(){
            setCpfValue(event.target.value);
        },

        pwd(){
            setPwdValue(event.target.value);
        },

        resCpf(){
            setResCpf(event.target.value);
        },

        resEmail(){
            setResEmail(event.target.value);
        },

        resPwd(){
            setResPwd(event.target.value);
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
                ariaHideApp={false}

            >
                {
                    !registerState ? 
                        <div className='loginFormContainer'>
                            <h1 className="titleLogin">Donatio</h1>
                            <h2 className="title">Login</h2>
                            <p className="loginDescription">Entre para acessar a página principal</p>

                            <Input 
                                Label="Insira seu CPF:" 
                                Description="Somente números. Ex: 11122233344"
                                Type="text"
                                Value={cpfValue}
                                OnChange={HandleChange.cpf}
                            />

                            <Input 
                                Label="Insira sua Senha:" 
                                Description="Insira sua senha."
                                Type="password"
                                Value={pwdValue}
                                OnChange={HandleChange.pwd}
                            />

                            <div className="buttonBoxLogin">
                                <a onClick={() => setRegisterState(true)}>Criar Conta</a>
                                <Button StyleType="primaryStyle" Title="Entrar"/>
                            </div>
                        </div> 
                    : 
                        <div className='loginFormContainer'>
                            <h1 className="titleLogin">Donatio</h1>
                            <h2 className="title">Registrar</h2>
                            <p className="loginDescription">Crie uma Conta para ter acesso ao sistema.</p>

                            <Input 
                                Label="Insira seu CPF:" 
                                Description="Somente números. Ex: 11122233344"
                                Type="text"
                                Value={resCpf}
                                OnChange={HandleChange.resCpf}
                            />

                            <Input 
                                Label="Insira seu E-mail:" 
                                Description="Insira seu e-mail."
                                Type="email"
                                Value={resEmail}
                                OnChange={HandleChange.resEmail}
                            />

                            <Input 
                                Label="Insira sua Senha:" 
                                Description="Insira sua senha."
                                Type="password"
                                Value={resPwd}
                                OnChange={HandleChange.resPwd}
                            />


                            <Button StyleType="primaryStyle" Title="Criar Conta"/>
                        </div> 
                }
            </Modal>
        </div>
    )
}

export default index;