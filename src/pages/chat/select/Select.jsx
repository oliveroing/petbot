import React from 'react';
import './Select.css';

const Select = ({ options, handleSelectedActions }) => {
    return (
        <div className='selector-content'>
            <div className='selector-container'>
                <div className='selector-options'>
                    {options.map(op =>
                        <div
                            onClick={ (e) => handleSelectedActions(op.id) } 
                            key={op.id} 
                            className="selector-options">
                            <label> {op.text} </label>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Select;