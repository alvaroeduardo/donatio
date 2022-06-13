import React from 'react'
import './style.css'

function Input(props) {
    return (
        <div className='inputContainer'>
            <p className="labelInput">{ props.Label }</p>

            <div className="inputContainerSetData">
                <input placeholder={ props.Description } type={ props.Type } value={props.Value} onChange={props.OnChange}/>
            </div>
        </div>
    )
}

export default Input;