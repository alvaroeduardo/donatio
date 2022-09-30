import React from 'react';
import '../../globalStyle.css'

import Menu from '../../Components/Menu';
import Main from '../../Components/Main';

function Home() {
    return (
        <div className='homeComponentContainer'>
            <Menu/>
            
            <Main>
                <h1>Início</h1>
            </Main> 
        </div>
    
    );
}

export default Home;