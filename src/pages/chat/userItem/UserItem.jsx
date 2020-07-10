import React from 'react';
import './UserItem.css';
import user from './../../../assets/images/user.png';
import Fade from 'react-reveal/Fade';

const UserItem = ({ text }) => {
    return (
        <div className='user-item-container'>
            <div className="user-item-messages">
                <Fade right>
                    <label>{text}</label>
                </Fade>
            </div>
            <img src={user} alt='user-avatar' />
        </div>
    );
};


export default UserItem;