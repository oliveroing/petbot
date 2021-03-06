import React from 'react';
import './CatItem.css';
// import catAvatar from './../../../assets/images/covid19.gif';
import catAvatar from './../../../assets/images/covid2.png';
import Fade from 'react-reveal/Fade';

const CatItem = ({ text }) => {
    return (
        <div className='cat-item-container'>
            <img src={catAvatar} alt="cat-avatar" />
            <div className="cat-item-messages">
                {text.map((t, index) =>
                    <Fade left key={index}>
                        <label > {t} </label>
                    </Fade>
                )}
            </div>
        </div>
    );
};

export default CatItem;