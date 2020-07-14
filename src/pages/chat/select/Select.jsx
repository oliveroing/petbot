import React, { useState } from 'react';
import './Select.css';
import user from './../../../assets/images/user.png';
import Fade from 'react-reveal/Fade';

const Select = ({ options, handleSelectedActions }) => {

    const [disabled, setDisabled] = useState(false);

    return (
        <div className='selector-content'>
            <div className='selector-container'>
                <div className='selector-container-options'>
                    <Fade right>
                        <div className='selector-options' disabled={disabled}>
                            {options.map(op =>
                                <div
                                    onClick={(e) => {
                                        handleSelectedActions(op.id);
                                        setDisabled(true);
                                    }}
                                    key={op.id}
                                    className="selector-options" >
                                    <label> {op.text} </label>
                                </div>
                            )}
                        </div>
                    </Fade>
                </div>
                <div className='selector-container-user'>
                    <img src={user} alt='user-avatar' />
                </div>
            </div>
        </div>
    );
};

export default Select;